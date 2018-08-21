class PlaidTransactionsService
  def initialize(public_token, current_user)
    @public_token = public_token
    @current_user = current_user
  end

  def request_plaid_data
    exchange_response = client.item.public_token.exchange(@public_token)
    access_token = exchange_response.access_token
    plaid_data = request_transactions(access_token)
  end

  def request_transactions(access_token)
    now = Date.today
    start_date = now - 365
    begin
      plaid_data_response = client.transactions.get(access_token, start_date, now)
    rescue Plaid::ItemError => e
      plaid_data_response = { error: {error_code: e.error_code, error_message: e.error_message}}
    end
    plaid_data_response.as_json
  end

  def account_name_and_id(plaid_data)
    account_details_hash = {}
    plaid_data['accounts'].each do |account|
      account_details_hash[account['name']] = account['account_id']
    end
    account_details_hash
  end

  def filter_transactions(plaid_data)
    filtered_transactions = []
    plaid_data['transactions'].each do |transaction|
      if filter_by_category(transaction) || filter_by_name(transaction)
        filtered_transactions << transaction
      end
    end
    filtered_transactions
  end

  def filter_by_category(transaction)
    transaction['category'].any? == "Subscriptions"
  end

  def filter_by_name(transaction)
    transaction_filters = ["McDonald", "United Airlines", "SPOTIFY", "AMAZON PRIME", "TPG INTERNET", "HULU", "NETFLIX", "SHOWTIME", "MOBILE", "AMAZON DIGITAL SVCS", "Google Storage"]
    transaction_filters.any? { |search_item| transaction['name'].downcase.include? search_item.downcase }
  end

  def save_filtered_transactions(filtered_transactions)
    filtered_transactions.each do |transaction|
      new_transaction = Transaction.new(
        amount: transaction['amount'],
        date: transaction['date'],
        description: transaction['name'],
        category: transaction['category'],
        user_id: @current_user.id,
        plaid_account_id: transaction['account_id'])
      new_transaction.save!
      @current_user.api_last_run = Date.today
      @current_user.save
    end
  end

  def save_user_subscriptions(filtered_transactions)
    descriptions = []
    filtered_transactions.each do |transaction|
      descriptions << transaction['name']
    end
    descriptions.uniq.each do |uniq_trans_desc|
      new_user_subscription = UserSubscription.new(
        name: uniq_trans_desc,
        user_id: @current_user.id,
        reminder: false,
        deal_notification: false,
        status: "active")
      new_user_subscription.save!
      # connect user_subscription with the transaction
    end
  end

  def save_account_name_and_id(account_name_and_id)
    account_name_and_id.each do |account_name, plaid_account_id|
      new_account = Account.new(name: account_name, plaid_account_id: plaid_account_id)
      new_account.save!
    end
  end

  private

  def client
    @client ||= Plaid::Client.new(
      env: :sandbox,
      client_id: ENV['PLAID_CLIENT_ID'],
      secret: ENV['PLAID_SECRET'],
      public_key: ENV['PLAID_PUBLIC_KEY'] )
  end
end

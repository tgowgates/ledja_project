class PlaidTransactionsService
  def initialize(token, current_user)
    @token = token
    @current_user = current_user
  end

  def subscription_transactions(transaction_filters)
    exchange_response = client.item.public_token.exchange(@token)
    access_token = exchange_response.access_token
    transactions = request_transactions(access_token)
    filter_transactions(transactions, transaction_filters)
  end

  def request_transactions(access_token)
    now = Date.today
    start_date = now - 365 * 2
    begin
      transactions_response = client.transactions.get(access_token, start_date, now)
    rescue Plaid::ItemError => e
      transactions_response = { error: {error_code: e.error_code, error_message: e.error_message}}
    end
    transactions_response.as_json['transactions']
  end

  def filter_transactions(transactions, transaction_filters)
    filtered_transactions = []
    transactions.each do |transaction|
      if transaction_filters.any? { |search_item| transaction['name'].downcase.include? search_item.downcase }
        filtered_transactions << transaction
      end
    end
    byebug
    filtered_transactions
  end

  private

  def client
    @client ||= Plaid::Client.new(
      env: :development,
      client_id: ENV['PLAID_CLIENT_ID'],
      secret: ENV['PLAID_SECRET'],
      public_key: ENV['PLAID_PUBLIC_KEY']
    )
  end
end

class PlaidTransactionsService
  def initialize(token)
    @token = token
  end

  def subscription_transactions
    exchange_response = client.item.public_token.exchange(@token)
    access_token = exchange_response.access_token
    transactions = request_transactions(access_token)
    filter_transactions(transactions)
  end

  def request_transactions(access_token)
    now = Date.today
    start_date = now - 365
    begin
      transactions_response = client.transactions.get(access_token, start_date, now)
    rescue Plaid::ItemError => e
      transactions_response = { error: {error_code: e.error_code, error_message: e.error_message}}
    end
    transactions_response.as_json['transactions']
  end

  def filter_transactions(transactions)
    filtered_transactions = []
    transactions.each do |transaction|
      if filter_by_category || filter_by_name(transaction)
        filtered_transactions << transaction
      end
    end
    filtered_transactions
  end

  def filter_by_category(transction)
    transaction['category'].downcase.include? "subscription".downcase
  end

  def filter_by_name(transaction)
    transaction_filters = ["SPOTIFY", "AMAZON PRIME", "HULU", "NETFLIX", "MYHERITAGE", "AMAZON DIGITAL SVCS"]
    transaction_filters.any? { |search_item| transaction['name'].downcase.include? search_item.downcase }
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

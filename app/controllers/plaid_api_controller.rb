class PlaidApiController < ApplicationController
  before_action :set_client, only: [:get_access_token]

  def get_access_token
    exchange_token_response = @client.item.public_token.exchange(params['public_token'])
    @access_token = exchange_token_response['access_token']
    item_id = exchange_token_response['item_id']
    exchange_token_response.to_json
    get_transactions
  end

  def get_transactions
    now = Date.today
    start_date = 2.years.ago
    begin
      @transactions_response = @client.transactions.get(@access_token, start_date, now)
    rescue Plaid::ItemError => e
      @transactions_response = { error: {error_code: e.error_code, error_message: e.error_message}}
    end
    @plaid_item = @transactions_response.to_json
    add_plaid_item_to_user(@plaid_item)
  end

  def add_plaid_item_to_user(item)
    @plaid_item = PlaidItem.new(user_id: @user, item: item)
    @plaid_item.save
  end

  private
    def set_client
      @client = Plaid::Client.new(env: :sandbox,
                       client_id: ENV['PLAID_CLIENT_ID'],
                       secret: ENV['PLAID_SECRET'],
                       public_key: ENV['PLAID_PUBLIC_KEY'])
      @access_token = nil
      @user = current_user
    end
end

class PlaidApiController < ApplicationController

  def callback
    # intialize service with public token
    service = PlaidTransactionsService.new(params[:public_token], current_user)
    # exchange tokens for plaid api data
    plaid_data = service.request_plaid_data
    # filter the transaction using search criteria for subscriptions
    filtered_transactions = service.filter_transactions(plaid_data)
    # create active record transactions using the filtered plaid transactions
    service.save_filtered_transactions(filtered_transactions)
    # find the last transactions for each new subscription service
    service.save_user_subscriptions(filtered_transactions)
    # use the plaid api data to get the account names and account IDs
    account_name_and_id = service.account_name_and_id(plaid_data)
    # create active record accounts db with plaid account names and ids
    service.save_account_name_and_id(account_name_and_id)
  end
end


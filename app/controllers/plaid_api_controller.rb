class PlaidApiController < ApplicationController

  def callback
    service = PlaidTransactionsService.new(params[:public_token])
    plaid_data = service.request_plaid_data
    # save account names
    account_names = service.account_names(plaid_data)
    save_account_names(account_names)
    # save transactions
    filtered_transactions = service.filter_transactions(plaid_data)
    save_filtered_transactions(filtered_transactions)
  end

  def save_account_names(account_names)
    account_names.each do |account_name|
      new_account = Account.new(name: account_name)
      new_account.save!
    end
  end

  def save_filtered_transactions(filtered_transactions)
    filtered_transactions.each do |transaction|
      new_transaction = Transaction.new(
        amount: transaction['amount'],
        date: transaction['date'],
        description: transaction['name'],
        category: transaction['category'],
        user_id: current_user.id )
      new_transaction.save!
      current_user.api_last_run = Date.today
      current_user.save
    end
  end

end


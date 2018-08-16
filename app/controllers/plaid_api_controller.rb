class PlaidApiController < ApplicationController

  def callback
    service = PlaidTransactionsService.new(params[:public_token])
    filtered_transactions = service.subscription_transactions
    byebug
    save_filtered_transactions(filtered_transactions)
  end

  def save_filtered_transactions(filtered_transactions)
    filtered_transactions.each do |transaction|
      new_transaction = Transaction.new(amount: transaction['amount'],
        date: transaction['date'],
        description: transaction['name'],
        category: transaction['transaction_id'],
        user_id: current_user )
      new_transaction.save!
      byebug
    end
  end

end


class PlaidApiController < ApplicationController

  def callback
    service = PlaidTransactionsService.new(params[:public_token], current_user)
    filtered_transactions = service.subscription_transactions(["SPOTIFY", "Amazon Prime", "HULU", "NETFLIX", "MYHERITAGELTD", "MAZON DIGITAL SVCS"])
    filtered_transactions.each do |transaction|
      new_transaction = Transaction.new(amount: transaction['amount'],
        date: transaction['date'],
        description: transaction['name'],
        category: transaction['transaction_id'] )
      new_transaction.save
    end
  end
end


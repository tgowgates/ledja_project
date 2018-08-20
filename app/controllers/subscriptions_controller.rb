class SubscriptionsController < ApplicationController
  def index
    @current_user = current_user
    @user_subscription = UserSubscription.new
    # if transaction data exists
    if current_user.api_last_run != nil
      @descriptions = Transaction.where(user: @current_user).pluck(:description).uniq
      # hash (description => last transaction) with last transaction for each subscription for current user
      @lastTransactions = []
      @descriptions.each do |desc|
        @lastTransactions << Transaction.where("user_id = ? AND description = ?", @current_user.id, desc).order('date DESC').limit(1)[0]
      end
      # calculate the total spend on an annual basis
      sum = 0
      @lastTransactions.each do |transaction|
        sum += transaction.amount
      end
      # create a list of unique account names
      @account_names = []
      @lastTransactions.each do |transaction|
        account = Account.where("plaid_account_id = ?", transaction.plaid_account_id)
        @account_names << account[0].name
      end


      flash[:notice] = "Ledja found #{@descriptions.count} subscriptions totalling $#{sum.to_i * 12} each year."
    end
  end
end

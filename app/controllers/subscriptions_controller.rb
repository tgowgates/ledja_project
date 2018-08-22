class SubscriptionsController < ApplicationController
  def index
    @current_user = current_user
      @current_user.user_subscriptions
      @last_transactions = user_last_transactions
      @account_names = account_names(@last_transactions)
      flash_summary(@last_transactions)
  end

  def user_last_transactions
    descriptions = Transaction.where(user: @current_user).pluck(:description).uniq
    # hash (description => last transaction) with last transaction for each subscription for current user
    last_transactions = []
    descriptions.each do |desc|
      last_transactions << Transaction.where("user_id = ? AND description = ?", @current_user.id, desc).order('date DESC').limit(1)[0]
    end
    last_transactions
  end

  def account_names(last_transactions)
    account_names = []
    last_transactions.each do |transaction|
      account = Account.where("plaid_account_id = ?", transaction.plaid_account_id)
      account_names << account[0].name
    end
    account_names.uniq
  end

  def flash_summary(last_transactions)
    sum = 0
    last_transactions.each do |transaction|
      sum += transaction.amount
    end
    flash.now[:notice] = "Ledja found #{@last_transactions.count} subscriptions totalling $#{sum.to_i * 12} each year."
  end
end


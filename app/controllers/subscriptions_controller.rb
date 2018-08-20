class SubscriptionsController < ApplicationController
  def index
    @current_user = current_user
    @accounts = Account.all
    # figure out if the user is running for first time
    # first run true/false
    # # figure out if the user is running for first time
    # # first run true/false

    # get all transactions for the @current_user
      #description: return an array of unique transaction names (check unique method.)
      #amount: find the last amazon payment amount for current user
        # all transaction for amazon
        # sort ascending/descending by date
        # takexpl last transaction's amount
      #next payment: last transaction date + 1 month

    #array of unique subsription names for current_user
    if current_user.api_last_run != nil
      @descriptions = Transaction.where(user: @current_user).pluck(:description).uniq
      #hash (description => last transaction) with last transaction for each subscription for current user
      @lastTransactions = []
      @descriptions.each do |desc|
        @lastTransactions << Transaction.where("user_id = ? AND description = ?", @current_user.id, desc).order('date DESC').limit(1)[0]
      end
      flash[:notice] = "Great news! Ledja found #{@descriptions.count} subscriptions"
    end
    # @lastTransactions

    #exemple: you want amount   for last trans with mcdonald @lastTransaction["mcdonald"].ammount

    # divide filtered transactions into subscriptions (filter to unique transaction name)
    # save subscriptions into subscription database
    # show all subscriptions from @current_user
      #logo
      #name

  end



end

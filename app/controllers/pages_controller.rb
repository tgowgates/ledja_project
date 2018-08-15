class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home]

  def home
  end

   def show
    @transactions = JSON.parse(PlaidItem.last.item)
    @filtered_transactions = filter_transactions(@transactions)
   end

  def filter_transactions(transactions)
    filtered_transactions = []
    transactions.each do |transaction|
      if filter_by_category(transaction) || filter_by_name(transaction)
        filtered_transactions << transaction
      end
    end
    filtered_transactions
  end

  def filter_by_category(transaction)
    transaction['category'].any? == "subscriptions"
  end

  def filter_by_name(transaction)
    transaction_filters = ["SPOTIFY", "AMAZON PRIME", "TPG INTERNET", "HULU", "NETFLIX", "MOBILE", "AMAZON DIGITAL SVCS"]
    transaction_filters.any? { |search_item| transaction['name'].downcase.include? search_item.downcase }
  end

end

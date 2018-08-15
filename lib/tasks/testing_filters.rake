transactions = JSON.parse(PlaidItem.last.item)

def filter_transactions(transactions)
  @filtered_transactions = []
  transactions.each do |transaction|
    if filter_by_name(transaction) ||
      @filtered_transactions << transaction
    end
  end
end

def filter_by_category(transction)
  transaction['category'].downcase.include? "subscription".downcase
end

def filter_by_name(transaction)
  transaction_filters = ["SPOTIFY", "AMAZON PRIME", "HULU", "NETFLIX", "MYHERITAGE", "AMAZON DIGITAL SVCS"]
  transaction_filters.any? { |search_item| transaction['name'].downcase.include? search_item.downcase }
end

puts @filtered_transactions

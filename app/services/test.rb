transactions = JSON.parse(PlaidItem.last.item)
transaction_filters = ["SPOTIFY", "Amazon Prime", "HULU", "NETFLIX", "MYHERITAGELTD", "MAZON DIGITAL SVCS"]

filtered_transactions = []
transactions.each do |transaction|
  if transaction_filters.any? { |search_item| transaction['name'].downcase.include? search_item.downcase }
    filtered_transactions << transaction
  end
end

filtered_transactions.each do |transaction|
  Transaction.new(amount: transaction['amount'],
                  date: transaction['date'],
                  description: transaction['name'] )
end

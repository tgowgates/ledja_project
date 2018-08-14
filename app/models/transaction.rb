class Transaction < ApplicationRecord

  def filter_subscriptions
    @transaction = JSON.parse(PlaidItem.first.item)['transactions'][0]
    puts @transaction
  end
end

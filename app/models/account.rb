class Account < ApplicationRecord
  has_many :transactions
  belongs_to :plaid_item
end

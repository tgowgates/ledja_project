class Transaction < ApplicationRecord
  belongs_to :user_subscription
  belongs_to :account
end

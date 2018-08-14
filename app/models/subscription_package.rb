class SubscriptionPackage < ApplicationRecord
  belongs_to :companies
  has_many :user_subscriptions
end

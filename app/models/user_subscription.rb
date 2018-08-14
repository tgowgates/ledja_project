class UserSubscription < ApplicationRecord
  belongs_to :subscription_packages
  belongs_to :user
end

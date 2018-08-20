class UserSubscription < ApplicationRecord
  belongs_to :subscription_package
  belongs_to :user
end

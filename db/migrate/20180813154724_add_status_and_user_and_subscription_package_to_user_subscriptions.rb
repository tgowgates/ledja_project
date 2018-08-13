class AddStatusAndUserAndSubscriptionPackageToUserSubscriptions < ActiveRecord::Migration[5.2]
  def change
    add_column :user_subscriptions, :status, :string
    add_reference :user_subscriptions, :user, foreign_key: true
    add_reference :user_subscriptions, :subscription_package, foreign_key: true
  end
end

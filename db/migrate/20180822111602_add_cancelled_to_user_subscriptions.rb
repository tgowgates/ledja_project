class AddCancelledToUserSubscriptions < ActiveRecord::Migration[5.2]
  def change
    add_column :user_subscriptions, :cancelled, :boolean
  end
end

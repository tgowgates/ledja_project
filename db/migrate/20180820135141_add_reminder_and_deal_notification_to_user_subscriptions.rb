class AddReminderAndDealNotificationToUserSubscriptions < ActiveRecord::Migration[5.2]
  def change
    add_column :user_subscriptions, :reminder, :boolean
    add_column :user_subscriptions, :deal_notification, :boolean
  end
end

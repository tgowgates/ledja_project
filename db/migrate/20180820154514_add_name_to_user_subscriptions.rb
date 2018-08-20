class AddNameToUserSubscriptions < ActiveRecord::Migration[5.2]
  def change
    add_column :user_subscriptions, :name, :string
  end
end

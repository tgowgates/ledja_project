class CreateUserSubscriptions < ActiveRecord::Migration[5.2]
  def change
    create_table :user_subscriptions do |t|

      t.timestamps
    end
  end
end

class CreateSubscriptionPackages < ActiveRecord::Migration[5.2]
  def change
    create_table :subscription_packages do |t|

      t.timestamps
    end
  end
end

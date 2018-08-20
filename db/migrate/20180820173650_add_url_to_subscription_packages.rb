class AddUrlToSubscriptionPackages < ActiveRecord::Migration[5.2]
  def change
    add_column :subscription_packages, :url, :string
  end
end

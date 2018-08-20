class AddPhotoToSubscriptionPackages < ActiveRecord::Migration[5.2]
  def change
    add_column :subscription_packages, :photo, :string
  end
end

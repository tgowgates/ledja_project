class AddNameAndCategoryAndPriceAndCompanyAndFrequencyToSubscriptionPackages < ActiveRecord::Migration[5.2]
  def change
    add_column :subscription_packages, :name, :string
    add_column :subscription_packages, :category, :string
    add_column :subscription_packages, :price, :float
    add_reference :subscription_packages, :company, foreign_key: true
    add_column :subscription_packages, :frequency, :string
  end
end

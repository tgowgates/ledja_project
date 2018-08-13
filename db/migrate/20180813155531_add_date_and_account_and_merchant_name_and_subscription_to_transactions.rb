class AddDateAndAccountAndMerchantNameAndSubscriptionToTransactions < ActiveRecord::Migration[5.2]
  def change
    add_column :transactions, :date, :date
    add_reference :transactions, :account, foreign_key: true
    add_column :transactions, :merchant_name, :string
    add_reference :transactions, :subscripition, foreign_key: true
  end
end

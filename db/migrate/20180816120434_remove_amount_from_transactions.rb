class RemoveAmountFromTransactions < ActiveRecord::Migration[5.2]
  def change
    remove_column :transactions, :amount, :integer
  end
end
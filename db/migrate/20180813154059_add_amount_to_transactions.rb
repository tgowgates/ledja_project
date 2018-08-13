class AddAmountToTransactions < ActiveRecord::Migration[5.2]
  def change
    add_column :transactions, :email, :integer
  end
end

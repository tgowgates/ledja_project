class AddPlaidAccountIdToTransactions < ActiveRecord::Migration[5.2]
  def change
    add_column :transactions, :plaid_account_id, :string
  end
end

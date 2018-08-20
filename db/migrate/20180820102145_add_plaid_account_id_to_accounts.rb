class AddPlaidAccountIdToAccounts < ActiveRecord::Migration[5.2]
  def change
    add_column :accounts, :plaid_account_id, :string
  end
end

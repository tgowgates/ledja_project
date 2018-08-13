class AddNameAndBankNameAndPlaidItemToAccounts < ActiveRecord::Migration[5.2]
  def change
    add_column :accounts, :name, :string
    add_column :accounts, :bank_name, :string
    add_reference :accounts, :plaid_item, foreign_key: true
  end
end

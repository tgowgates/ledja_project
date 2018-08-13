class AddUserAndItemToPlaidItems < ActiveRecord::Migration[5.2]
  def change
    add_column :plaid_items, :item, :json
    add_reference :plaid_items, :user, foreign_key: true
  end
end

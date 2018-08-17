class AddFirstRunToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :first_run, :boolean
  end
end

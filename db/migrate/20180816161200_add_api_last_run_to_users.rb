class AddApiLastRunToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :api_last_run, :date
  end
end

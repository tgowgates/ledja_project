class RemoveFirstRunFromUser < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :first_run, :boolean
  end
end

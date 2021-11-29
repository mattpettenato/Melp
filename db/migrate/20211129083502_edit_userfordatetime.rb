class EditUserfordatetime < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :updated_at, :date
    add_column :users, :created_at, :date
  end
end

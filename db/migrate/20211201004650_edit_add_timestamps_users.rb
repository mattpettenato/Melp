class EditAddTimestampsUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :created_at, :datetime, null: false, default: Time.zone.now
    add_column :users, :updated_at, :datetime, null: false, default: Time.zone.now
  end
end

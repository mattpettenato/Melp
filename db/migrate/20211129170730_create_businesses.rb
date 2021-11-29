class CreateBusinesses < ActiveRecord::Migration[5.2]
  def change
    create_table :businesses do |t|
      t.string :name, null: false
      t.string :about, null: false
      t.integer :rating, null: false
      t.string :phone, null: false
      t.string :address, null: false
      t.string :hours, null: false
      t.timestamps
    end
    add_index :businesses, :name
  end
end

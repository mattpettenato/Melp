class EditLatlng < ActiveRecord::Migration[5.2]
  def change
    remove_column :businesses, :lat
    remove_column :businesses, :lng
    add_column :businesses , :latitude, :float
    add_column :businesses , :longitude, :float
  end
end

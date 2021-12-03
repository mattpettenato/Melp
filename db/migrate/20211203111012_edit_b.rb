class EditB < ActiveRecord::Migration[5.2]
  def change
    remove_column :businesses, :photos
  end
end

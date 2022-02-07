class EditWebsiteToBuspls < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :websiteurl, :string
  end
end

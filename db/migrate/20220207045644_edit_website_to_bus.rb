class EditWebsiteToBus < ActiveRecord::Migration[5.2]
  def change
    remove_column :businesses, :website
  end
end

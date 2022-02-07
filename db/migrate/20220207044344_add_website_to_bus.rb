class AddWebsiteToBus < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :website, :text
  end
end

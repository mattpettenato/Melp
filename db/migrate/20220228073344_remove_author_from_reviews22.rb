class RemoveAuthorFromReviews22 < ActiveRecord::Migration[5.2]
  def change
    remove_column :reviews, :user_id
    add_column :reviews, :user_id, :integer, null: false
  end
end

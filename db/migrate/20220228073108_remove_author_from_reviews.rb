class RemoveAuthorFromReviews < ActiveRecord::Migration[5.2]
  def change
    remove_column :reviews, :author_id
    add_column :reviews, :user_id, :integer
  end
end

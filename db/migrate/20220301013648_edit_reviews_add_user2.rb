class EditReviewsAddUser2 < ActiveRecord::Migration[5.2]
  def change
  end
  add_index :reviews, :author_id
end

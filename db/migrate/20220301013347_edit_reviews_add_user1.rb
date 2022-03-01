class EditReviewsAddUser1 < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :author_id, :integer, null: false
  end
  
end

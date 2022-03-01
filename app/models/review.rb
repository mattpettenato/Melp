# frozen_string_literal: true

# class Review < ApplicationRecord
#     # validates :body, :author_id, presence: true
#     # validates :rating, inclusion: { in: (1..5) }, presence: true
#     # validates :author_id, presence: true, uniquieness: {scope: :business_id}
#     validates_presence_of :rating, :comment, :user_id, :business_id
#     # belongs_to :user,
#     # foreign_key: :author_id,
#     # primary_key: :id,
#     # class_name: :User

#     # belongs_to :business,
#     # foreign_key: :business_id,
#     # primary_key: :id,
#     # class_name: :Business

# belongs_to :user

# belongs_to :business

# end

# app/models/review.rb
class Review < ApplicationRecord
  validates :rating, :body, :author_id, :business_id, presence: true

  belongs_to :user,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :User

  belongs_to :business,
  primary_key: :id,
  foreign_key: :business_id,
  class_name: :Business
end

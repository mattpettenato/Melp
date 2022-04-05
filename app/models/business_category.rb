# app/models/business_category

class BusinessCategory < ApplicationRecord
  validates_presence_of :category_id, :business_id
  
  belongs_to :category, optional: true
  # foreign_key: :cateogry_id,
  # class_name: :Category

  belongs_to :business

end
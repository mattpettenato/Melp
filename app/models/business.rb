class Business < ApplicationRecord
    validates :name, :about, :phone, :address, :hours, presence: true
    validates :rating, inclusion:{in: (1..5)}

    has_many_attached :photos

    has_many :reviews,
    primary_key: :id,
    foreign_key: :business_id,
    class_name: :Review

    has_many :users_reviewed,
    through: :reviews,
    source: :user


end 
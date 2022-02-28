class Review < ApplicationRecord    
    validates :body, :author_id, presence: true
    validates :rating, inclusion: { in: (1..5) }, presence: true
    validates :author_id, presence: true, uniquieness: {scope: :business_id}

    belongs_to :author,
    foreign_key: :author_id,
    primary_key: :id,
    class_name: :User,

    belongs_to :business,
    foreign_key: :business_id,
    primary_key: :id,
    class_name: :Business

end
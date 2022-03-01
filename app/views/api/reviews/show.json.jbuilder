json.reviews do 
    json.set! @review.id do 
        json.extract! @review, :id, :body, :rating, :user_id, :business_id
        json.user @review.user.username
    end
end
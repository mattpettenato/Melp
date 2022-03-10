@reviews.each do |review|
    json.set! review.id do
        json.extract! review, :id, :body, :rating, :author_id, :business_id
        # json.user review.user.username
        json.business review.business
        # json.business_photo review.business.photos.map {|photo| url_for(photo)}
    end
end


# @reviews.each do |review|
#     json.set! review.id do
#         json.partial! '/api/reviews/review', review: review
#     end
# end
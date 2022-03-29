
# @businesses.each do |business|
#     json.set! business.id do
#         json.extract! business, :id, :name, :about, :rating, :phone, :address, :hours, :websiteurl, :latitude, :longitude


#         if business.photos.attached?
#             json.photoUrls url_for(business.photos)
#         else
#             # console.log('test')
#             json.photoUrls ""
#         end
        
#         json.photoUrls business.photos.map {|photo| url_for(photo)}
#     end
# end
@businesses.each do |business|
  json.set! business.id do
    json.partial! business, business: @business
  end
end

# business.reviews.includes(:author).each do |review|
#   json.reviews do
#     json.set! review.id do
#       json.partial! 'api/reviews/review', review: review
#     end
#   end
# end
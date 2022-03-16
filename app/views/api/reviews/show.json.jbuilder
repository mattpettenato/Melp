# # json.reviews do 
# #     json.set! @review.id do 
# #         json.extract! @review, :id, :body, :rating, :user_id, :business_id
# #         json.user @review.user.username
# #     end
# # end

# # json.partial! '/api/reviews/review', review: @review 

# # json.partial! 'review', review: @review

# json.reviews do 
#     json.set! @review.id do 
#         json.extract! @review, :id, :body, :rating, :author_id, :business_id
#         # json.user @review.user.first_name
#     end
# end

json.partial! 'review', review: @review
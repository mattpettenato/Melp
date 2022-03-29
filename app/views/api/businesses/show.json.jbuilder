json.partial! 'business', business: @business
json.reviews do 
  @business.reviews.each do |review|
      json.set! review.id do 
        json.partial! 'api/reviews/review', review: review
      end
  end
end

@business.reviews.includes(:author).each do |review|
  json.reviews do
    json.set! review.id do
      json.partial! 'api/reviews/review', review: review
    end
  end

  json.authors do
    json.set! review.author.id do
      json.extract! review.author, :id, :username
    end
  end

end

# json.average_rating @review.business.average_rating

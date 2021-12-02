json.business do 
    json.partial! 'business', business: @business
end
json.photoUrls @business.photos.map { |file| url_for(file) }


# json.partial! './api/businesses/business', business: @business
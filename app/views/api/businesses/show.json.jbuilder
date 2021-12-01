json.business do 
    json.partial! 'business', business: @business
end

# json.partial! './api/businesses/business', business: @business
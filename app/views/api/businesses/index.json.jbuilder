
@businesses.each do |business|
    json.set! business.id do
        json.extract! business, :id, :name, :about, :rating, :phone, :address, :hours
        # if business.main_photo.attached?
        #     json.main_photoUrl url_for(business.main_photo)
        # else
        #     # console.log('test')
        #     json.main_photoUrl ""
        # end

        if business.photos.attached?
            json.photoUrls url_for(business.photos)
        else
            # console.log('test')
            json.photoUrls ""
        end
        
        json.photoUrls business.photos.map {|photo| url_for(photo)}
    end
end

# @businesses.each do |business|
#     json.set! business.id do 
#         json.partial! business, business: @business
#     end
# end
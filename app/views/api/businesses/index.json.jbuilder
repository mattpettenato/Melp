
@businesses.each do |business|
    json.set! business.id do
        json.extract! business, :id, :name, :about, :rating, :phone, :address, :hours, :websiteurl


        if business.photos.attached?
            json.photoUrls url_for(business.photos)
        else
            # console.log('test')
            json.photoUrls ""
        end
        
        json.photoUrls business.photos.map {|photo| url_for(photo)}
    end
end

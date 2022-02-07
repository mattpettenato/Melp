json.extract! business, :id, :name, :about, :rating, :phone, :address, :hours, :websiteurl, :latitude, :longitude


if business.photos.attached?
    json.photos business.photos.map { |file| url_for(file) }
end


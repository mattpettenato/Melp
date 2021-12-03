json.extract! business, :id, :name, :about, :rating, :phone, :address, :hours
# json.main_photoUrl @business.main_photo
# json.photoUrls @business.photos.map {|photo| url_for(photo)}

# if business.photos.attached?
#     json.photos business.photos.map { |file| url_for(file) }
# end

json.photoUrls @business.photos.map {|photo| url_for(photo)}
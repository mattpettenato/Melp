json.extract! @business, :id, :name, :about, :rating, :phone, :address, :hours
json.main_photoUrl @business.main_photo
json.photoUrls @business.photos.map {|photo| url_for(photo)}
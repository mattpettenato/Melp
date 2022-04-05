json.extract! business, :id, :name, :about, :rating, :phone, :address, :hours, :websiteurl, :latitude, :longitude, :average_rating

categories = []
business.categories.each do |cat|
  categories.push(cat.title)
end

json.categories categories

json.photos business.photos.map { |file| url_for(file) }

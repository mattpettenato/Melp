# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ActiveRecord::Base.transaction do

User.destroy_all

    user1 = User.create!(
      id: 1
      username: 'demo', 
      password: 'demopassword'
    )

    business3 =  Business.create(
        id: 3,
        business_name: "Joe's Pizza",
        city: "New York",
        state: "NY",
        business_zip_code: 10003,
        street_address: "150 E 14th St",
        category_1: "Pizza",
        phone: "(212) 388-9474",
        website: "joespizzanyc.com",
        business_email: "joespizzanyc.com",
        cost: "$$",
        lat: 40.7331781,
        lng: -73.9898288,
        owner_id: 3
    )
    
end

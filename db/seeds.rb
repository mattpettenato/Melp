# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# ActiveRecord::Base.transaction do

require 'open-uri'

BusinessCategory.destroy_all
Category.destroy_all
User.destroy_all
Business.destroy_all
Review.destroy_all

ActiveRecord::Base.connection.tables.each do |t|
    ActiveRecord::Base.connection.reset_pk_sequence!(t)
end

demo = User.create!({username: "demo", email: "demo@demo.com", password: "demopassword"})

user1 = User.create!({username: "MaxJohnson", email: "max@max.com", password: "passwordmax"})
user2 = User.create!({username: "AnnaViviana", email: "anna@anna.com", password: "passwordanna"})
user3 = User.create!({username: "JeongJo", email: "jeong@jo.com", password: "passwordjeong"})
user4 = User.create!({username: "wineicecream", email: "wineicecream@wineicecream.com", password: "passwordwineicecream"})
user5 = User.create!({username: "baconsoftdrink", email: "baconsoftdrink@.baconsoftdrinkcom", password: "passwordbaconsoftdrink"})
user6 = User.create!({username: "sweetpicklechicken", email: "sweetpicklechicken@sweetpicklechicken.com", password: "passwordsweetpicklechicken"})
user7 = User.create!({username: "cowsnail", email: "cowsnail@.cowsnailcom", password: "passwordcowsnail"})
user8 = User.create!({username: "spiritham", email: "spiritham@.com", password: "passwordspiritham"})
user9 = User.create!({username: "applepiewalrus", email: "applepiewalrus@.com", password: "passwordapplepiewalrus"})
user10 = User.create!({username: "oceanmine", email: "oceanmine@oceanmine.com", password: "passwordoceanmine"})
user11 = User.create!({username: "banananeo", email: "banananeo@banananeo.com", password: "passwordbanananeo"})


bus1 = Business.create!({name: "Taquería El Farolito", about: "Mexican, Bar, Late Night", rating: 4.5, phone: "(415) 824-7877", address: "2779 Mission St, San Francisco, CA 94110", hours:"10:00AM–1:45AM", websiteurl: "https://elfarolitosf.com/", latitude: 37.75266096263757, longitude: -122.41819051574423})

b1p1 = URI.open('https://melp-aa-dev.s3.us-west-1.amazonaws.com/bus1pic1.jpg')
b1p2 = URI.open('https://melp-aa-dev.s3.us-west-1.amazonaws.com/bus1pic2.jpg')
b1p3 = URI.open('https://melp-aa-dev.s3.us-west-1.amazonaws.com/bus1pic3.jpg')
b1p4 = URI.open('https://melp-aa-dev.s3.us-west-1.amazonaws.com/bus1pic4.jpg')

bus1.photos.attach(io: b1p1, filename: 'bus1pic1.jpg')
bus1.photos.attach(io: b1p2, filename: "bus1pic2.jpg")
bus1.photos.attach(io: b1p3, filename: "bus1pic3.jpg")
bus1.photos.attach(io: b1p4, filename: "bus1pic4.jpg")

revT1 = Review.create(body: "They have the best shrimp burritos  I totally recommend this to anyone looking for a good juicy burrito in SF", rating: 5, author_id: user7.id, business_id: bus1.id)
revT2 = Review.create(body: "This is one of the classic spots where the food is great but the service not so much. The burritos here are some of the best I've had in sf. Although I'd grab it to go and eat it in mission dolores park as the inside space itself is not that clean. I also ordered a drink that they forgot and later refused to give me. So come expecting good food, not good service.", rating: 4, author_id: user11.id, business_id: bus1.id)
revT3 = Review.create(body: "That's one expensive burrito", rating: 2, author_id: user10.id, business_id: bus1.id)
revT4 = Review.create(body: "El Farolito is elite! I love how they're open so late and the prices are AMAZING. You definitely have to get the super burrito, which adds a whole half avocado. Service is fast and friendly. Their salsas are also amazing and I usually have to ask for a few to go with my burrito.", rating: 5, author_id: user8.id, business_id: bus1.id)

bus2 = Business.create!({name: "Kogi Gogi BBQ", about: "Barbeque, Korean, Beer Bar", rating: 4, phone: "(415) 702-6792", address: "1358 9th Ave San Francisco, CA 94122", hours:"12:00PM-10:00PM", websiteurl: "https://www.kogigogibbq.com/", latitude: 37.76324493147762, longitude: -122.46607400140118})

b2p1 = URI.open("https://melp-aa-dev.s3.us-west-1.amazonaws.com/bus2pic1.jpg")
b2p2 = URI.open("https://melp-aa-dev.s3.us-west-1.amazonaws.com/bus2pic2.jpg")
b2p3 = URI.open("https://melp-aa-dev.s3.us-west-1.amazonaws.com/bus2pic3.jpg")
b2p4 = URI.open("https://melp-aa-dev.s3.us-west-1.amazonaws.com/bus2pic4.jpg")

bus2.photos.attach(io: b2p1, filename: "bus2pic1.jpg")
bus2.photos.attach(io: b2p2, filename: "bus2pic2.jpg")
bus2.photos.attach(io: b2p3, filename: "bus2pic3.jpg")
bus2.photos.attach(io: b2p4, filename: "bus2pic4.jpg")

revK1 = Review.create(body: "his place hits the spot and was a great way to end our trip to the city. It would be wise to call ahead to reserve a table as they get really busy at dinner service (not surprising because the food is soooooo goooood!). Reminds me of AYCE KBBQ in LA.", rating: 5, author_id: user7.id, business_id: bus2.id)
revK2 = Review.create(body: "I ate here on February 15th, 2022 and paid $38 per person for dinner. The selection of meat were good and the side dishes were nice. I tried the spicy rice cake and corn cheese, which were very delicious. The spicy rice cake was crispy but not burnt and its flavor was sweet and spicy. The corn cheese had chopped onions, tomatoes, peppers and the cheese was cooked to a nice crisp.", rating: 4, author_id: user2.id, business_id: bus2.id)
revK3 = Review.create(body: "Place is very bustling and busy - but the staff was very attentive, even when we were waiting for a friend to arrive and didn't order yet they checked in a few times to make sure we were okay. Got our orders rlly quickly and had lots of grill changes", rating: 5, author_id: user4.id, business_id: bus2.id)
revK4 = Review.create(body: "I walked by this place a few times and it definitely caught my eye because it was definitely the VIBE I was looking for. I finally found an excuse, when I took out someone for their birthday and we had a great time!", rating: 4, author_id: user8.id, business_id: bus2.id)

bus3 = Business.create!({name: "District Tea", about: "Bubble Tea, Boba, Sandwiches", rating: 4.5, phone: "(415) 638-6134", address: "2154 Mission St San Francisco, CA 94110", hours:"11:00AM-5:00PM", websiteurl: "https://www.districtteasf.com/", latitude: 37.762734486517225, longitude: -122.4196499725657})

b3p2 = URI.open("https://melp-aa-dev.s3.us-west-1.amazonaws.com/bus3pic1.jpg")
b3p1 = URI.open("https://melp-aa-dev.s3.us-west-1.amazonaws.com/bus3pic2.jpg")
b3p3 = URI.open("https://melp-aa-dev.s3.us-west-1.amazonaws.com/bus3pic3.jpg")
b3p4 = URI.open("https://melp-aa-dev.s3.us-west-1.amazonaws.com/bus3pic4.jpg")

bus3.photos.attach(io: b3p1, filename: "bus3pic1.jpg")
bus3.photos.attach(io: b3p2, filename: "bus3pic2.jpg")
bus3.photos.attach(io: b3p3, filename: "bus3pic3.jpg")
bus3.photos.attach(io: b3p4, filename: "bus3pic4.jpg")

revDB1 = Review.create(body: "I love coming back to District Tea time and time again. You get the taste of real tea- something that is often missing in many other boba shops. Their quality of the drinks never falter and their service is unbeatable. And holy nuts, don't get me started on the snacks!!! The popcorn chicken and Korean hot dogs are heaven sent.", rating: 5, author_id: user4.id, business_id: bus3.id)
revDB2 = Review.create(body: "District Tea was offering a half gallon size of my exact go-to drink at all boba places (Jasmine Oat Milk Tea) so I had to take advantage and I'm so glad I did! It was the perfect amount and really satisfied my quarantine craving", rating: 6, author_id: user2.id, business_id: bus3.id)
revDB3 = Review.create(body: "There's lots of boba places in SF so it's easy to get worn out seeing one in every neighborhood. District Tea though should be on the top of your list if you're in the Mission district! ", rating: 5, author_id: user8.id, business_id: bus3.id)
revDB4 = Review.create(body: "Having gone to many of the boba shops in the West Bay & Peninsula, my boba rankings include District tea as top 3 on my list of top boba shops.", rating: 5, author_id: user9.id, business_id: bus3.id)

bus4 = Business.create!({
                        name: "North Beach Pizza", 
                        about: "Pizza, Italian, Sandwiches", 
                        rating: 3, 
                        phone: "(415) 433-2444", 
                        address: "1462 Grant Ave San Francisco, CA 94133", 
                        hours:"11:00AM–10:00PM",
                        websiteurl:"https://www.mynorthbeachpizza.com/",
                        latitude: 37.800593863103884,
                        longitude: -122.40735018605879
                        })

b4p1 = URI.open("https://melp-aa-dev.s3.us-west-1.amazonaws.com/bus4pic1.jpg")
b4p2 = URI.open("https://melp-aa-dev.s3.us-west-1.amazonaws.com/bus4pic2.jpg")
b4p3 = URI.open("https://melp-aa-dev.s3.us-west-1.amazonaws.com/bus4pic3.jpg")
b4p4 = URI.open("https://melp-aa-dev.s3.us-west-1.amazonaws.com/bus4pic4.jpg")

bus4.photos.attach(io: b4p1, filename: "bus4pic1.jpg")
bus4.photos.attach(io: b4p2, filename: "bus4pic2.jpg")
bus4.photos.attach(io: b4p3, filename: "bus4pic3.jpg")
bus4.photos.attach(io: b4p4, filename: "bus4pic4.jpg")

revPZ1 = Review.create(body: "Came here with my family, and will 100% be coming back soon with friends", rating: 5, author_id: user8.id, business_id: bus4.id)
revPZ2 = Review.create(body: "Just in the mood for a slice. So many choices: hawaiian, meat combo, cheese, veggie, pesto.  I picked  a slice of pesto. They took it out of the warmer and served it. Yes, it was fast service but it was not hot and it was eating pizza that has been sitting there (don't know how long).", rating: 3, author_id: user7.id, business_id: bus4.id)
revPZ3 = Review.create(body: "My usual pizza place closed down. So I tried this place since I knew about the Original NB Pizza in little Italy. I was so surprised how good the pizza was! Amazing! It is now my favorite pizza place. The dough was soft, plenty of toppings and they use real cheese! I have no problem ordering almost every weekend.", rating: 5, author_id: user11.id, business_id: bus4.id)
revPZ4 = Review.create(body: "North beach pizza is the best pizza place in terms of taste and service. We had a pizza delivered quickly and it was hot like it just came out of the oven. Delivery guy was friendly. I would definitely be back and recommend this place to anyone. Thanks !!!!", rating: 4, author_id: user3.id, business_id: bus4.id)

rev1 = Review.create(body: "The food was great", rating: 4, author_id: user1.id, business_id: bus1.id)
rev2 = Review.create(body:"The food was great", rating: 4, author_id: user1.id, business_id: bus2.id)
rev3 = Review.create(body:"The food and drinks are amazing", rating: 3, author_id: user2.id, business_id: bus3.id)
rev4 = Review.create(body:"The food and drinks are amazing", rating: 4, author_id: user3.id, business_id: bus4.id)

bus5 = Business.create!({ name: "Nash Hot Chicken & Ramen", about: "Chicken, Ramen", rating: 4.5, phone: "(415) 655-9122", address: "3970 17th St Ste B San Francisco, CA 94114", hours: "12:00PM-9:00PM", websiteurl: "https://www.nashchickramen.com", latitude: 37.762674091103484, longitude: -122.43436564504873 })

b5p1 = URI.open("https://melp-aa-dev.s3.us-west-1.amazonaws.com/bus5pic1.jpeg")
b5p2 = URI.open("https://melp-aa-dev.s3.us-west-1.amazonaws.com/bus5pic2.jpeg")
b5p3 = URI.open("https://melp-aa-dev.s3.us-west-1.amazonaws.com/bus5pic3.jpeg")
b5p4 = URI.open("https://melp-aa-dev.s3.us-west-1.amazonaws.com/bus5pic4.jpeg")

bus5.photos.attach(io: b5p1, filename: "bus5pic1.jpeg")
bus5.photos.attach(io: b5p2, filename: "bus5pic2.jpeg")
bus5.photos.attach(io: b5p3, filename: "bus5pic3.jpeg")
bus5.photos.attach(io: b5p4, filename: "bus5pic4.jpeg")

bus5rev1 = Review.create(body: "Ramen had so much flavor! Will 100% be coming here again!", rating: 5, author_id: user5.id, business_id: bus5.id)
bus5rev1 = Review.create(body: "The chicken had so much flavor! I cannot wait to eat here with my friends again!", rating: 5, author_id: user7.id, business_id: bus5.id)
bus5rev1 = Review.create(body: "Was vert busy and I was hungry and tired", rating: 3, author_id: user5.id, business_id: bus5.id)

# categories

c1 = Category.create!({
  title: 'italian'
})

c2 = Category.create!({
  title: 'asian'
})

c3 = Category.create!({
  title: 'mexican'
})

c4 = Category.create!({
  title: 'boba'
})

c5 = Category.create!({
  title: 'pizza'
})

c6 = Category.create!({
  title: "tacos",
})

c7 = Category.create!({
  title: "bbq",
})

c8 = Category.create!({
  title: "food",
})

c9 = Category.create!({
  title: "drinks",
})

c10 = Category.create!({
  title: "korean",
})

c11 = Category.create!({
  title: "chicken"
})

c12 = Category.create!({
  title: "coffee",
})

c13 = Category.create!({
  title: "dessert",
})

c14 = Category.create!({
  title: "pastry",
})

c15 = Category.create!({
  title: "tea",
})

BusinessCategory.create!({
  category_id: c1.id,
  business_id: bus4.id
})

BusinessCategory.create!({
    category_id: c2.id,
    business_id: bus2.id,
})

BusinessCategory.create!({
  category_id: c2.id,
  business_id: bus3.id
})

BusinessCategory.create!({
  category_id: c3.id,
  business_id: bus1.id,
})

BusinessCategory.create!({
  category_id: c4.id,
  business_id: bus3.id
})

BusinessCategory.create!({
  category_id: c2.id,
  business_id: bus5.id
})

BusinessCategory.create!({
  category_id: c5.id,
  business_id: 4
})

BusinessCategory.create!({
  category_id: c6.id,
  business_id: 1,
})

BusinessCategory.create!({
  category_id: c7.id,
  business_id: 2,
})

BusinessCategory.create!({
  category_id: c8.id,
  business_id: 1,
})

BusinessCategory.create!({
  category_id: c8.id,
  business_id: 2,
})

BusinessCategory.create!({
  category_id: c8.id,
  business_id: 3,
})

BusinessCategory.create!({
  category_id: c8.id,
  business_id: 4,
})

BusinessCategory.create!({
  category_id: c8.id,
  business_id: 5,
})

BusinessCategory.create!({
  category_id: c9.id,
  business_id: 3,
})

BusinessCategory.create!({
  category_id: c10.id,
  business_id: 2,
})

bus6 = Business.create!({ name: "Bella Trattoria", about: "Italian, Pasta", rating: 4.5, phone: "(415) 221-0305", address: "3854 Geary Blvd San Francisco, CA 94118", hours: "11:00AM-9:00PM", websiteurl: "https://osteriabella.com", latitude: 37.781567730282, longitude: -122.46090431504788 })

b6p1 = URI.open("https://melp-aa-dev.s3.us-west-1.amazonaws.com/bus6pic1.jpeg")
b6p2 = URI.open("https://melp-aa-dev.s3.us-west-1.amazonaws.com/bus6pic2.jpeg")
b6p3 = URI.open("https://melp-aa-dev.s3.us-west-1.amazonaws.com/bus6pic3.jpeg")
b6p4 = URI.open("https://melp-aa-dev.s3.us-west-1.amazonaws.com/bus6pic4.jpeg")

bus6.photos.attach(io: b6p1, filename: "bus6pic1.jpeg")
bus6.photos.attach(io: b6p2, filename: "bus6pic2.jpeg")
bus6.photos.attach(io: b6p3, filename: "bus6pic3.jpeg")
bus6.photos.attach(io: b6p4, filename: "bus6pic4.jpeg")

BusinessCategory.create!({
  category_id: c1.id,
  business_id: bus6.id,
})

BusinessCategory.create!({
  category_id: c8.id,
  business_id: bus6.id,
})

BusinessCategory.create!({
  category_id: c5.id,
  business_id: bus6.id,
})

BusinessCategory.create!({
  category_id: c11.id,
  business_id: bus5.id,
})

revB1 = Review.create(body: "Came here with my family, and will 100% be coming back soon with friends", rating: 5, author_id: user2.id, business_id: bus6.id)
revB2 = Review.create(body: "The food was great", rating: 4, author_id: user1.id, business_id: bus6.id)
revB3 = Review.create(body: "Dessert was amazing but I wanted more", rating: 3, author_id: user2.id, business_id: bus6.id)
revB4 = Review.create(body: "The food and drinks are amazing", rating: 4, author_id: user3.id, business_id: bus6.id)

bus7 = Business.create!({ name: "Diamond Coffee N Pastry", about: "Coffee, Tea, Bakery", rating: 4.5, phone: "(628) 226-9139", address: "1014 Clement St San Francisco, CA 94118", hours: "9:00AM-4:00PM", websiteurl: "https://www.diamondbeans.com/", latitude: 37.78304760742992, longitude: -122.47022173115299 })

b7p1 = URI.open("https://melp-aa-dev.s3.us-west-1.amazonaws.com/bus7pic1.jpeg")
b7p2 = URI.open("https://melp-aa-dev.s3.us-west-1.amazonaws.com/bus7pic2.jpeg")
b7p3 = URI.open("https://melp-aa-dev.s3.us-west-1.amazonaws.com/bus7pic3.jpeg")
b7p4 = URI.open("https://melp-aa-dev.s3.us-west-1.amazonaws.com/bus7pic4.jpeg")

bus7.photos.attach(io: b7p1, filename: "bus7pic1.jpeg")
bus7.photos.attach(io: b7p2, filename: "bus7pic2.jpeg")
bus7.photos.attach(io: b7p3, filename: "bus7pic3.jpeg")
bus7.photos.attach(io: b7p4, filename: "bus7pic4.jpeg")

BusinessCategory.create!({
  category_id: c9.id,
  business_id: bus7.id,
})

BusinessCategory.create!({
  category_id: c9.id,
  business_id: bus7.id,
})

BusinessCategory.create!({
  category_id: c12.id,
  business_id: bus7.id,
})

BusinessCategory.create!({
  category_id: c13.id,
  business_id: bus7.id,
})

BusinessCategory.create!({
  category_id: c14.id,
  business_id: bus7.id,
})

BusinessCategory.create!({
  category_id: c15.id,
  business_id: bus7.id,
})

BusinessCategory.create!({
  category_id: c15.id,
  business_id: bus3.id,
})

rev7r1 = Review.create(body: "super cute shop w many different coffee flavors ~ they also have these super delicious looking croffles - will definitely try next time! They have a limited number of tables but we were able to find a spot to study! Theres also outlets at each table :)", rating: 5, author_id: user7.id, business_id: bus7.id)
rev7r2 = Review.create(body: "Cute new coffee shop alert in the Richmond! I love the interior - bright and airy! They even have a doggy area in the shop in the back corner of the shop! The service was amazing! The staff was extremely friendly and attentive!", rating: 4, author_id: user2.id, business_id: bus7.id)
rev7r3 = Review.create(body: "The drinks were pretty sweet but nothing overwhelming. The croffle was delicious but i wouldn't substitute a meal for it. It's just a nice treat. I noticed some reviews that they were unsatisfied with proportions based on how pricey things are. Remember, you're paying for the aesthetic of the place. Customer service is amazing! The staff was patient and kind.", rating: 4, author_id: user9.id, business_id: bus7.id)
rev7r4 = Review.create(body: "Super cute coffee shop on a relatively quiet strip of the inner Richmond with trendy/instagrammable croffles, fancy $$ drinks, and very few indoor seats.", rating: 3, author_id: user6.id, business_id: bus7.id)

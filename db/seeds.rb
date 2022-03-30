# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# ActiveRecord::Base.transaction do

require 'open-uri'

User.destroy_all
Business.destroy_all

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

bus2 = Business.create!({name: "Kogi Gogi BBQ", about: "Barbeque, Korean, Beer Bar", rating: 4, phone: "(415) 702-6792", address: "1358 9th Ave San Francisco, CA 94122", hours:"12:00PM-10:00PM", websiteurl: "https://www.kogigogibbq.com/", latitude: 37.76324493147762, longitude: -122.46607400140118})

b2p1 = URI.open("https://melp-aa-dev.s3.us-west-1.amazonaws.com/bus2pic1.jpg")
b2p2 = URI.open("https://melp-aa-dev.s3.us-west-1.amazonaws.com/bus2pic2.jpg")
b2p3 = URI.open("https://melp-aa-dev.s3.us-west-1.amazonaws.com/bus2pic3.jpg")
b2p4 = URI.open("https://melp-aa-dev.s3.us-west-1.amazonaws.com/bus2pic4.jpg")

bus2.photos.attach(io: b2p1, filename: "bus2pic1.jpg")
bus2.photos.attach(io: b2p2, filename: "bus2pic2.jpg")
bus2.photos.attach(io: b2p3, filename: "bus2pic3.jpg")
bus2.photos.attach(io: b2p4, filename: "bus2pic4.jpg")

bus3 = Business.create!({name: "District Tea", about: "Bubble Tea, Boba, Sandwiches", rating: 4.5, phone: "(415) 638-6134", address: "2154 Mission St San Francisco, CA 94110", hours:"11:00AM-5:00PM", websiteurl: "https://www.districtteasf.com/", latitude: 37.762734486517225, longitude: -122.4196499725657})

b3p1 = URI.open("https://melp-aa-dev.s3.us-west-1.amazonaws.com/bus3pic1.jpg")
b3p2 = URI.open("https://melp-aa-dev.s3.us-west-1.amazonaws.com/bus3pic2.jpg")
b3p3 = URI.open("https://melp-aa-dev.s3.us-west-1.amazonaws.com/bus3pic3.jpg")
b3p4 = URI.open("https://melp-aa-dev.s3.us-west-1.amazonaws.com/bus3pic4.jpg")

bus3.photos.attach(io: b3p1, filename: "bus3pic1.jpg")
bus3.photos.attach(io: b3p2, filename: "bus3pic2.jpg")
bus3.photos.attach(io: b3p3, filename: "bus3pic3.jpg")
bus3.photos.attach(io: b3p4, filename: "bus3pic4.jpg")

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


rev1 = Review.create(body: "The food was great", rating: 4, author_id: user1.id, business_id: bus1.id)
rev2 = Review.create(body:"The food was great", rating: 4, author_id: user1.id, business_id: bus2.id)
rev3 = Review.create(body:"The food and drinks are amazing", rating: 3, author_id: user2.id, business_id: bus3.id)
rev4 = Review.create(body:"The food and drinks are amazing", rating: 4, author_id: user3.id, business_id: bus4.id)





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



bus1 = Business.create!({name: "Taquería El Farolito", about: "Busy, no-frills Mexican eatery & late-night haunt serving comfort food like tacos & burritos.", rating: 4.5, phone: "(415) 824-7877", address: "2779 Mission St, San Francisco, CA 94110", hours:"10AM–1:45AM"})


bus2 = Business.create!({name: "Kogi Gogi BBQ", about: "Informal dinner spot serving all-you-can-eat, grill-your-own Korean BBQ, plus beer & sake.", rating: 4, phone: "(415) 702-6792", address: "1358 9th Ave San Francisco, CA 94122", hours:"Mon-Fri 5PM-10PM, Sat-Sun 12PM-10PM"})

bus3 = Business.create!({name: "District Tea", about: "We are the Mission District’s newest tea house! We proudly use natural and organic fresh fruits and dairy products! Built by San Francisco natives, District Tea brings a new, but familiar vibe to the Mission District.", rating: 4.5, phone: "(415) 638-6134", address: "2154 Mission St San Francisco, CA 94110", hours:"11AM-5PM"})
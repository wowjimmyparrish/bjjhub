# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "🌱 Seeding data..."

User.create!(username: "jimmy", password: "password")
User.create!(username: "darrel", password: "password123")

Position.create!(name: "guard")
Position.create!(name: "side control")
Position.create!(name: "knee on belly")
Position.create!(name: "mount")
Position.create!(name: "rear mount")
Position.create!(name: "turtle")

Technique.create!(name: "Kimura", video: "https://www.youtube.com/embed/p-6lmaseoGI", is_favorite: false, position_id: 2, user_id: 1)
Technique.create!(name: "Knee On Belly defense", video: "https://www.youtube.com/embed/cOiwKYGDFMQ", is_favorite: true, position_id: 3, user_id: 1)
Technique.create!(name: "Armbar from guard", video: "https://www.youtube.com/embed/pQ43Oy5k9yQ", is_favorite: true, position_id: 1, user_id: 1)
Technique.create!(name: "Cross choke from mount", video: "https://www.youtube.com/embed/8wLWTw8G0c0", is_favorite: true, position_id: 4, user_id: 2)
Technique.create!(name: "Rolling escape", video: "https://www.youtube.com/embed/RRp5tficE00",is_favorite: false, position_id: 6, user_id: 2)
Technique.create!(name: "5 ways out of back mount", video: "https://www.youtube.com/embed/rHr_Xge5eIw", is_favorite: true, position_id: 5, user_id: 2)


Comment.create!(comment: "Great video!", user_id: 1, technique_id: 1) 
Comment.create!(comment: "Bad video!", user_id: 2, technique_id: 2)

puts "✅ Done seeding!"
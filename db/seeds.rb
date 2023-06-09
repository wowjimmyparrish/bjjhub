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

Technique.create!(name: "Kimura", video: "https://youtu.be/p-6lmaseoGI", position_id: 2, user_id: 1)
Technique.create!(name: "Knee On Belly defense", video: "https://youtu.be/cOiwKYGDFMQ", position_id: 3, user_id: 1)
Technique.create!(name: "Armbar from guard", video: "https://youtu.be/pQ43Oy5k9yQ", position_id: 1, user_id: 1)
Technique.create!(name: "Cross choke from mount", video: "https://youtu.be/8wLWTw8G0c0", position_id: 4, user_id: 2)
Technique.create!(name: "Rolling escape", video: "https://youtu.be/RRp5tficE00", position_id: 6, user_id: 2)
Technique.create!(name: "5 ways out of back mount", video: "https://youtu.be/rHr_Xge5eIw", position_id: 5, user_id: 2)
Technique.create!(name: "Side control sub", video: "https://youtu.be/p-6lmaseoGI", position_id: 2, user_id: 1)
Technique.create!(name: "Knee On Belly position", video: "https://youtu.be/cOiwKYGDFMQ", position_id: 3, user_id: 1)
Technique.create!(name: "Sub from guard", video: "https://youtu.be/pQ43Oy5k9yQ", position_id: 1, user_id: 1)
Technique.create!(name: "Choke from mount", video: "https://youtu.be/8wLWTw8G0c0", position_id: 4, user_id: 2)
Technique.create!(name: "Turtle escape", video: "https://youtu.be/RRp5tficE00", position_id: 6, user_id: 2)
Technique.create!(name: "Back mount technique", video: "https://youtu.be/rHr_Xge5eIw", position_id: 5, user_id: 2)
Technique.create!(name: "Side control technique", video: "https://youtu.be/p-6lmaseoGI", position_id: 2, user_id: 1)
Technique.create!(name: "Knee On Belly", video: "https://youtu.be/cOiwKYGDFMQ", position_id: 3, user_id: 1)
Technique.create!(name: "Guard techniques", video: "https://youtu.be/pQ43Oy5k9yQ", position_id: 1, user_id: 1)
Technique.create!(name: "Mount", video: "https://youtu.be/8wLWTw8G0c0", position_id: 4, user_id: 2)
Technique.create!(name: "Turtle defence", video: "https://youtu.be/RRp5tficE00", position_id: 6, user_id: 2)
Technique.create!(name: "Back mount", video: "https://youtu.be/rHr_Xge5eIw", position_id: 5, user_id: 2)



Comment.create!(comment: "Great video!", user_id: 1, technique_id: 1) 
Comment.create!(comment: "Bad video!", user_id: 2, technique_id: 2)

puts "✅ Done seeding!"
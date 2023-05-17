# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


User.create!(username: "jimmy", password: "password")
User.create!(username: "darrel", password: "password123")

# Workout.create!(title: "Workout 1", focus: "This focuses on the biceps", length: 45, workout: "Concentration Curls 5 reps x 5 sets, Barbell Curls 5 reps x 5 sets, Hammer Curls 10 reps x 3 sets", user_id: 1)
# Workout.create!(title: "Workout 2", focus: "This is a lower body workout", length: 60, workout: "Squats 10 reps x 5 sets, Lunges 10 reps x 3 sets, GHR 10 reps x 3 sets, Leg extensions 10 reps x 3 sets", user_id: 1) 
# Workout.create!(title: "Workout 3", focus: "This is a full body workout", length: 90, workout: "Squats 5 reps x 5 sets, Deadlifts 5 reps x 5 sets, Bench Press 5 reps x 5 sets, Barbell Rows 5 reps x 5 sets, Pullups AMRAP x 3, Military Press 5 reps x 5 sets", user_id: 2)
# Workout.create!(title: "Workout 4", focus: "This focuses on the arms", length: 45, workout: "Barbell Curls 10 reps x 3 sets, Hammer Curls 10 reps x 3 sets, Skullcrushers 10 reps x 3 sets, Tricep extensions 10 reps x 3 sets", user_id: 2)

Comment.create!(comment: "Great video!", user_id: 1, technique_id: 1) 
Comment.create!(comment: "Bad video!", user_id: 2, technique_id: 2)
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
5.times do
  Lead.create name: Faker::Name.name,
              phone: Faker::PhoneNumber.cell_phone,
              email: Faker::Internet.email

  HouseProject.create title: Faker::Book.title,
                      square: Faker::Number.decimal(2),
                      project_description: Faker::Lorem.sentence
end

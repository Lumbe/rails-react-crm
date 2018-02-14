# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

departments = Array.new(3) {Department.create!(name: Faker::Company.name)}
Array.new(25) do
  Lead.create!(
    name: Faker::Name.name,
    phone: Faker::PhoneNumber.cell_phone,
    email: Faker::Internet.email,
    department: departments.sample,
    location: Faker::Address.city,
    project: Faker::Pokemon.name,
    square: rand(40..250),
    floor: rand(1..2),
    question: Faker::StarWars.quote,
    region: Faker::Address.state,
    source: ['Запрос на сайте', 'Facebook', 'Рекомендация'].sample,
    online_request: rand(2),
    come_in_office: rand(2),
    phone_call: rand(2),
    user: User.all.sample,
    assignee: User.all.sample
  )
end
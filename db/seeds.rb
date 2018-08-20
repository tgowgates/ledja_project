# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
SubscriptionPackage.destroy_all

SubscriptionPackage.create(
    name: "Netflix Basic",
    category: "Netflix",
    price: 7.99,
    photo: "https://res.cloudinary.com/dzcwxfufs/image/upload/v1534784378/ACSszfFzO4XqUIBEMm4bLoIbmAWT7-NyiFTgjHi22Q_s900-mo-c-c0xffffffff-rj-k-no.jpg",
    url: "https://www.netflix.com/ChangePlan"
  )
 SubscriptionPackage.create(
    name: "Hulu Commercials",
    category: "Netlfix",
    price: 7.99,
    photo: "https://res.cloudinary.com/dzcwxfufs/image/upload/v1534784342/nxa4lEyS_400x400.jpg"
  )
SubscriptionPackage.create(
    name: "Amazon Video",
    category: "Netflix",
    price: 0,
    photo: "https://res.cloudinary.com/dzcwxfufs/image/upload/v1534784400/Uq2Q-ded_400x400.jpg"
  )



SubscriptionPackage.create(
    name: "Hulu Commercials",
    category: "Hulu",
    price: 7.99,
    photo: "https://res.cloudinary.com/dzcwxfufs/image/upload/v1534784342/nxa4lEyS_400x400.jpg"
  )
 SubscriptionPackage.create(
    name: "Netflix Basic",
    category: "Hulu",
    price: 7.99,
    photo: "https://res.cloudinary.com/dzcwxfufs/image/upload/v1534784378/ACSszfFzO4XqUIBEMm4bLoIbmAWT7-NyiFTgjHi22Q_s900-mo-c-c0xffffffff-rj-k-no.jpg",
    url: "https://www.netflix.com/ChangePlan"
  )
SubscriptionPackage.create(
    name: "HBO w/o TV",
    category: "Hulu",
    price: 14.99,
    photo: "https://res.cloudinary.com/dzcwxfufs/image/upload/v1534784428/hbo-logo.jpg"
  )



  # create_table "subscription_packages", force: :cascade do |t|
  #   t.datetime "created_at", null: false
  #   t.datetime "updated_at", null: false
  #   t.string "name"
  #   t.string "category"
  #   t.float "price"
  #   t.bigint "company_id"
  #   t.string "frequency"
  #   t.index ["company_id"], name: "index_subscription_packages_on_company_id"
  # end

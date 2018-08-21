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
    photo: "https://res.cloudinary.com/dzcwxfufs/image/upload/v1534865339/Netflix_Web_Logo.png",
    url: "https://www.netflix.com/ChangePlan"
  )
 SubscriptionPackage.create(
    name: "Hulu Commercials",
    category: "Netflix",
    price: 7.99,
    photo: "https://res.cloudinary.com/dzcwxfufs/image/upload/v1534847099/1280px-Hulu_logo_flat.svg.png",
    url: "https://signup.hulu.com/plans"
  )
SubscriptionPackage.create(
    name: "Amazon Video",
    category: "Netflix",
    price: 0,
    photo: "https://res.cloudinary.com/dzcwxfufs/image/upload/v1534846833/0063934.png",
    url: "https://www.primevideo.com/?ref=dvm_pds_amz_PT_lb_s_g%7Cc_267085804018_m_kQCs2syH-dc_s__"
  )



SubscriptionPackage.create(
    name: "Hulu Commercials",
    category: "Hulu",
    price: 7.99,
    photo: "https://res.cloudinary.com/dzcwxfufs/image/upload/v1534847099/1280px-Hulu_logo_flat.svg.png",
    url: "https://signup.hulu.com/plans"
  )
 SubscriptionPackage.create(
    name: "Netflix Basic",
    category: "Hulu",
    price: 7.99,
    photo: "https://res.cloudinary.com/dzcwxfufs/image/upload/v1534865339/Netflix_Web_Logo.png",
    url: "https://www.netflix.com/ChangePlan"
  )
SubscriptionPackage.create(
    name: "HBO w/o TV",
    category: "Hulu",
    price: 14.99,
    photo: "https://res.cloudinary.com/dzcwxfufs/image/upload/v1534846743/1280px-HBO_logo.svg.png",
    url: "https://www.hbo.com/order"
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

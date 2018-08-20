# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_08_20_135141) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "accounts", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
    t.string "bank_name"
    t.bigint "plaid_item_id"
    t.string "plaid_account_id"
    t.index ["plaid_item_id"], name: "index_accounts_on_plaid_item_id"
  end

  create_table "companies", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "plaid_items", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.json "item"
    t.bigint "user_id"
    t.index ["user_id"], name: "index_plaid_items_on_user_id"
  end

  create_table "subscription_packages", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
    t.string "category"
    t.float "price"
    t.bigint "company_id"
    t.string "frequency"
    t.index ["company_id"], name: "index_subscription_packages_on_company_id"
  end

  create_table "transactions", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "description"
    t.string "category"
    t.date "date"
    t.bigint "account_id"
    t.string "merchant_name"
    t.bigint "user_subscription_id"
    t.bigint "user_id"
    t.float "amount"
    t.string "plaid_account_id"
    t.index ["account_id"], name: "index_transactions_on_account_id"
    t.index ["user_id"], name: "index_transactions_on_user_id"
    t.index ["user_subscription_id"], name: "index_transactions_on_user_subscription_id"
  end

  create_table "user_subscriptions", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "status"
    t.bigint "user_id"
    t.bigint "subscription_package_id"
    t.boolean "reminder"
    t.boolean "deal_notification"
    t.index ["subscription_package_id"], name: "index_user_subscriptions_on_subscription_package_id"
    t.index ["user_id"], name: "index_user_subscriptions_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet "current_sign_in_ip"
    t.inet "last_sign_in_ip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.date "api_last_run"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "accounts", "plaid_items"
  add_foreign_key "plaid_items", "users"
  add_foreign_key "subscription_packages", "companies"
  add_foreign_key "transactions", "accounts"
  add_foreign_key "transactions", "user_subscriptions"
  add_foreign_key "transactions", "users"
  add_foreign_key "user_subscriptions", "subscription_packages"
  add_foreign_key "user_subscriptions", "users"
end

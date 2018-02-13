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

ActiveRecord::Schema.define(version: 20180213145632) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "contacts", force: :cascade do |t|
    t.string "name"
    t.bigint "user_id"
    t.integer "assigned_to"
    t.string "phone"
    t.string "email"
    t.string "string"
    t.string "location"
    t.string "project"
    t.string "square"
    t.string "floor"
    t.string "question"
    t.string "region"
    t.string "source"
    t.boolean "online_request"
    t.boolean "come_in_office"
    t.boolean "phone_call"
    t.bigint "department_id"
    t.integer "status", default: 0
    t.string "alt_email"
    t.boolean "do_not_call", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["department_id"], name: "index_contacts_on_department_id"
    t.index ["user_id"], name: "index_contacts_on_user_id"
  end

  create_table "departments", force: :cascade do |t|
    t.string "name"
    t.string "city"
    t.string "address"
    t.string "website"
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "facades", force: :cascade do |t|
    t.bigint "project_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "image_file_name"
    t.string "image_content_type"
    t.integer "image_file_size"
    t.datetime "image_updated_at"
    t.index ["project_id"], name: "index_facades_on_project_id"
  end

  create_table "friendly_id_slugs", force: :cascade do |t|
    t.string "slug", null: false
    t.integer "sluggable_id", null: false
    t.string "sluggable_type", limit: 50
    t.string "scope"
    t.datetime "created_at"
    t.index ["slug", "sluggable_type", "scope"], name: "index_friendly_id_slugs_on_slug_and_sluggable_type_and_scope", unique: true
    t.index ["slug", "sluggable_type"], name: "index_friendly_id_slugs_on_slug_and_sluggable_type"
    t.index ["sluggable_id"], name: "index_friendly_id_slugs_on_sluggable_id"
    t.index ["sluggable_type"], name: "index_friendly_id_slugs_on_sluggable_type"
  end

  create_table "house_projects", force: :cascade do |t|
    t.string "title"
    t.decimal "square"
    t.text "project_description"
    t.integer "floors"
    t.integer "rooms"
    t.integer "bathrooms"
    t.integer "cars_in_garage"
    t.text "build_technology"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "leads", force: :cascade do |t|
    t.string "name"
    t.string "phone"
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "location"
    t.string "project"
    t.string "square"
    t.string "floor"
    t.text "question"
    t.string "region"
    t.string "source"
    t.boolean "online_request", default: false
    t.boolean "come_in_office", default: false
    t.boolean "phone_call", default: false
    t.integer "status", default: 0
    t.integer "user_id"
    t.integer "assigned_to"
    t.integer "department_id"
    t.integer "contact_id"
  end

  create_table "memberships", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "department_id"
    t.integer "role", default: 0
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["department_id"], name: "index_memberships_on_department_id"
    t.index ["user_id"], name: "index_memberships_on_user_id"
  end

  create_table "photos", force: :cascade do |t|
    t.bigint "project_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "image_file_name"
    t.string "image_content_type"
    t.integer "image_file_size"
    t.datetime "image_updated_at"
    t.index ["project_id"], name: "index_photos_on_project_id"
  end

  create_table "projects", force: :cascade do |t|
    t.string "title", default: ""
    t.decimal "area", precision: 10, scale: 2
    t.text "description", default: ""
    t.boolean "mansard", default: false
    t.boolean "terrace", default: false
    t.boolean "garage", default: false
    t.integer "floors"
    t.integer "rooms"
    t.text "first_floor_desc", default: ""
    t.text "second_floor_desc", default: ""
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "model_file_name"
    t.string "model_content_type"
    t.integer "model_file_size"
    t.datetime "model_updated_at"
    t.string "first_floor_plan_file_name"
    t.string "first_floor_plan_content_type"
    t.integer "first_floor_plan_file_size"
    t.datetime "first_floor_plan_updated_at"
    t.string "second_floor_plan_file_name"
    t.string "second_floor_plan_content_type"
    t.integer "second_floor_plan_file_size"
    t.datetime "second_floor_plan_updated_at"
    t.string "third_floor_plan_file_name"
    t.string "third_floor_plan_content_type"
    t.integer "third_floor_plan_file_size"
    t.datetime "third_floor_plan_updated_at"
    t.boolean "hitech", default: false
    t.string "category", default: ""
    t.string "slug"
    t.integer "views_count", default: 0
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
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "access_token"
    t.date "access_token_expired_at"
    t.string "first_name", default: ""
    t.string "last_name", default: ""
    t.boolean "admin", default: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "contacts", "departments"
  add_foreign_key "contacts", "users"
  add_foreign_key "facades", "projects"
  add_foreign_key "memberships", "departments"
  add_foreign_key "memberships", "users"
  add_foreign_key "photos", "projects"
end

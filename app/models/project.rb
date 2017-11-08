class Project < ApplicationRecord
  has_attached_file :model, styles: { medium: "400x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  has_attached_file :photo, styles: { medium: "400x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  has_attached_file :first_floor_plan, styles: { medium: "400x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  has_attached_file :second_floor_plan, styles: { medium: "400x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  validates_attachment :model, content_type: { content_type: /\Aimage\/.*\Z/ }
  validates_attachment :photo, :first_floor_plan, :second_floor_plan, content_type: { content_type: /\Aimage\/.*\Z/ }
  has_many :facades, dependent: :destroy
  accepts_nested_attributes_for :facades, allow_destroy: true
  has_many :photos, dependent: :destroy
  accepts_nested_attributes_for :photos, allow_destroy: true
end

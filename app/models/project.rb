class Project < ApplicationRecord
  extend FriendlyId
  friendly_id :slug_candidates, use: :slugged

  has_attached_file :model, styles: { medium: "400x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  has_attached_file :first_floor_plan, styles: { medium: "400x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  has_attached_file :second_floor_plan, styles: { medium: "400x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  has_attached_file :third_floor_plan, styles: { medium: "400x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  validates_attachment :model, content_type: { content_type: /\Aimage\/.*\Z/ }
  has_many :facades, dependent: :destroy
  accepts_nested_attributes_for :facades, allow_destroy: true
  has_many :photos, dependent: :destroy
  accepts_nested_attributes_for :photos, allow_destroy: true

  def normalize_friendly_id(text)
    text.to_slug.normalize! :transliterations => [:russian, :latin]
  end

  def slug_candidates
    [
        [:title],
        [:title, :area]
    ]
  end

  def should_generate_new_friendly_id?
    slug.blank? || title_changed?
  end
end

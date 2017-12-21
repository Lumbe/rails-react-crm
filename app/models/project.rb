class Project < ApplicationRecord
  extend FriendlyId
  friendly_id :slug_candidates, use: :slugged
  scope :title_search, ->(query) { ransack(title_cont: query).result }
  scope :by_category, ->(category) { where(category: category) }
  scope :by_min_area, ->(min_area) { where('area > ?', min_area) }
  scope :by_max_area, ->(max_area) { where('area < ?', max_area) }
  scope :by_floors, ->(floors) { where(floors: floors) }
  scope :with_mansard, -> { where(mansard: true) }
  scope :with_terrace, -> { where(terrace: true) }
  scope :with_garage, -> { where(garage: true) }
  scope :is_hitech, -> { where(hitech: true) }

  has_attached_file :model,
    styles: { big: "810x608>",medium: "400x300^", thumb: "150x113^" },
          convert_options: {
            medium: " -gravity center -crop '400x300+0+0'",
            thumb: " -gravity center -crop '150x113+0+0'"
          },
          default_url: "/images/:style/missing.png"
  has_attached_file :first_floor_plan, default_url: "/images/:style/missing.png"
  has_attached_file :second_floor_plan, default_url: "/images/:style/missing.png"
  has_attached_file :third_floor_plan, default_url: "/images/:style/missing.png"
  validates_attachment :model, content_type: { content_type: /\Aimage\/.*\Z/ }
  has_many :facades, dependent: :destroy
  accepts_nested_attributes_for :facades, allow_destroy: true
  has_many :photos, dependent: :destroy
  accepts_nested_attributes_for :photos, allow_destroy: true

  class << self
    def popular
      projects = where('views_count > ?', 0)
      if projects.count > 2
        projects.order(views_count: :desc).limit(5)
      else
        all.order(created_at: :desc).limit(5)
      end
    end
  end

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

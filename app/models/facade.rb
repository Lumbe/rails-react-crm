class Facade < ApplicationRecord
  belongs_to :project, inverse_of: :facades
  has_attached_file :image, styles: { medium: "400x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  validates_attachment :image, content_type: { content_type: /\Aimage\/.*\Z/ }
end

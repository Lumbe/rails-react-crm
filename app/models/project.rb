class Project < ApplicationRecord
  has_attached_file :model, styles: { medium: "400x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  validates_attachment :model, presence: true
  do_not_validate_attachment_file_type :model
end

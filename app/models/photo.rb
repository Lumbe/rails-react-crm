class Photo < ApplicationRecord
  belongs_to :project, inverse_of: :photos
  has_attached_file :image,
                    styles: { thumb: "150x113^" },
                    convert_options: {
                        thumb: " -gravity center -crop '150x113+0+0'"
                    },
                    default_url: "/images/:style/missing.png"
  validates_attachment :image, content_type: { content_type: /\Aimage\/.*\Z/ }
end

class Lead < ApplicationRecord
  validates :name, :phone, presence: true
end

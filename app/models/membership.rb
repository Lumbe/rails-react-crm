class Membership < ApplicationRecord
  enum role: [:visitor, :chief, :marketer, :senior_manager, :manager, :tech_designer, :estimator, :accountant, :retired]

  belongs_to :user
  belongs_to :department
end

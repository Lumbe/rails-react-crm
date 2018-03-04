class Contact < ApplicationRecord
  enum status: [:newly, :repeated, :proposal, :finished, :sended]

  belongs_to :user, optional: true
  belongs_to :assignee, class_name: "User", foreign_key: :assigned_to, optional: true
  belongs_to :department
  has_many :leads
  # has_many :comments, as: :commentable
  # has_many :commercial_proposals

  validates :name, :phone, :source, :region, presence: true

  # phony_normalize :phone, default_country_code: 'UA'

  scope :order_by_status, -> (first = :proposal, second = :repeated, third = :newly, fourth = :finished, fifth = :sended) {
    order("status = #{Contact.statuses[first]} DESC, status = #{Contact.statuses[second]} DESC, status = #{Contact.statuses[third]} DESC, status = #{Contact.statuses[fourth]} DESC")
  }

  def self.top_repeated_leads
    joins(:leads).group("contacts.id").order("count(leads.id) DESC")
  end

  # Set associated department by :id if department :id is passed instead of Department object
  def department=(value)
    if value.instance_of? String
      self.department = Department.find_by(id: value)
    else
      super
    end
  end
end

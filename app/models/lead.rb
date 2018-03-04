class Lead < ApplicationRecord
  enum status: [:newly, :closed, :converted, :sended, :repeated, :claimed]

  belongs_to :user, optional: true
  belongs_to :assignee, class_name: "User", foreign_key: :assigned_to, optional: true
  belongs_to :department
  # belongs_to :contact, optional: true
  # has_many :comments, as: :commentable

  validates :name, :phone, presence: true

  # phony_normalize :phone, default_country_code: 'UA'

  scope :order_by_status, -> (first = :claimed, second = :repeated, third = :newly, fourth = :converted, fifth = :sended, sixth = :closed) {
    order("status = #{Lead.statuses[first]} DESC, status = #{Lead.statuses[second]} DESC, status = #{Lead.statuses[third]} DESC,
    status = #{Lead.statuses[fourth]} DESC, status = #{Lead.statuses[fifth]} DESC, status = #{Lead.statuses[sixth]} DESC")
  }

  # def related_contacts
  #   Contact.where(department: self.department).ransack(phone_cont: self.phone.chars.last(7).join).result.or(Contact.where(department: self.department, email: self.email).where.not(email: ''))
  #
  # end

  # Set associated department by :id if department :id is passed instead of Department object
  def department=(value)
    if value.instance_of? String
      self.department = Department.find_by(id: value)
    else
      super
    end
  end
end
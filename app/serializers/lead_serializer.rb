class LeadSerializer < ActiveModel::Serializer
  belongs_to :user
  class UserSerializer < ActiveModel::Serializer
    attributes :id, :email, :first_name, :last_name
  end

  attributes :id, :name, :phone, :email, :location, :project,
             :square, :floor, :question, :region, :source, :online_request,
             :come_in_office, :phone_call, :status, :user, :assigned_to,
             :department, :created_at, :statuses

  def user
    if object.user.present?
      {
        id: object.user.id,
        email: object.user.email,
        first_name: object.user.first_name,
        last_name: object.user.last_name
      } if object.user.present?
    end
  end

  def assigned_to
    if object.assignee.present?
      {
          id: object.assignee.id,
          email: object.assignee.email,
          first_name: object.assignee.first_name,
          last_name: object.assignee.last_name
      }
    end
  end

  def statuses
    Lead.statuses.keys
  end
end

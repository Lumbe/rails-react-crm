class LeadSerializer < ActiveModel::Serializer
  attributes :id, :name, :phone, :email, :location, :project,
             :square, :floor, :question, :region, :source, :online_request,
             :come_in_office, :phone_call, :status, :whoAdded, :assignedTo,
             :departmentName

  def departmentName
    if object.department.present?
      object.department.name
    else
      nil
    end
  end

  def whoAdded
    object.user.first_name + ' ' + object.user.last_name if object.user.present?
  end

  def assignedTo
    object.assignee.first_name + ' ' + object.assignee.last_name if object.assignee.present?
  end
end

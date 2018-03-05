class DepartmentSerializer < ActiveModel::Serializer
  attributes :id, :name, :city, :address, :website, :email
end

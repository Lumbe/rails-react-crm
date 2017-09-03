class HouseProjectSerializer < ActiveModel::Serializer
  attributes :id, :title, :square, :project_description, :floors, :rooms, :bathrooms, :cars_in_garage, :build_technology
end

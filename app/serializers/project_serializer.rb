class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :title, :area, :description, :mansard, :terrace,
             :garage, :first_floor_desc, :second_floor_desc, :model

  def model
    @model = object.model
    @model = {
      title: object.model_file_name,
      original: object.model.url,
      medium:  object.model.url(:medium),
      thumb: object.model.url(:thumb)
    }
  end
end

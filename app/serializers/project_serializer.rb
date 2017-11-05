class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :title, :area, :description, :mansard, :terrace,
             :garage, :first_floor_plan, :first_floor_desc, :second_floor_plan, :second_floor_desc, :model, :photo, :facades

  def model
    {
      title: object.model_file_name,
      original: object.model.url,
      medium:  object.model.url(:medium),
      thumb: object.model.url(:thumb)
    }
  end

  def photo
    {
      title: object.photo_file_name,
      original: object.photo.url,
      medium:  object.photo.url(:medium),
      thumb: object.photo.url(:thumb)
    }
  end

  def first_floor_plan
    {
        title: object.first_floor_plan_file_name,
        original: object.first_floor_plan.url,
        medium:  object.first_floor_plan.url(:medium),
        thumb: object.first_floor_plan.url(:thumb)
    }
  end

  def second_floor_plan
    {
        title: object.second_floor_plan_file_name,
        original: object.second_floor_plan.url,
        medium:  object.second_floor_plan.url(:medium),
        thumb: object.second_floor_plan.url(:thumb)
    }
  end

  def facades
    object.facades.map do |x|
      {
        title: x.image_file_name,
        original: x.image.url,
        medium:  x.image.url(:medium),
        thumb: x.image.url(:thumb)
      }
    end
  end
end

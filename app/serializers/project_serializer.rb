class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :slug, :title, :area, :description, :mansard, :terrace,
             :garage, :first_floor_plan, :first_floor_desc, :second_floor_plan,
             :second_floor_desc, :third_floor_plan, :model, :facades, :photos, :hitech, :category

  def model
    if object.model.present?
      {
        title: object.model_file_name,
        original: object.model.url,
        big: object.model.url(:big),
        medium:  object.model.url(:medium),
        thumb: object.model.url(:thumb)
      }
    else
      nil
    end
  end

  def first_floor_plan
    if object.first_floor_plan.present?
      {
          title: object.first_floor_plan_file_name,
          original: object.first_floor_plan.url,
      }
    else
      nil
    end
  end

  def second_floor_plan
    if object.second_floor_plan.present?
      {
          title: object.second_floor_plan_file_name,
          original: object.second_floor_plan.url,
      }
    else
      nil
    end
  end

  def third_floor_plan
    if object.third_floor_plan.present?
      {
          title: object.third_floor_plan_file_name,
          original: object.third_floor_plan.url,
      }
    else
      nil
    end
  end

  def facades
    if object.facades.present?
      object.facades.map do |x|
        {
          title: x.image_file_name,
          original: x.image.url,
          thumb: x.image.url(:thumb)
        }
      end
    else
      []
    end
  end

  def photos
    if object.photos.present?
      object.photos.map do |x|
        {
          title: x.image_file_name,
          original: x.image.url,
          thumb: x.image.url(:thumb)
        }
      end
    else
      []
    end
  end
end

class RemovePhotoFromProjects < ActiveRecord::Migration[5.1]
  def change
    remove_attachment :projects, :photo
  end
end

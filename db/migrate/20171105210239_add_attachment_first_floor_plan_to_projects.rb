class AddAttachmentFirstFloorPlanToProjects < ActiveRecord::Migration[5.1]
  def self.up
    change_table :projects do |t|
      t.attachment :first_floor_plan
    end
  end

  def self.down
    remove_attachment :projects, :first_floor_plan
  end
end

class AddAttachmentSecondFloorPlanToProjects < ActiveRecord::Migration[5.1]
  def self.up
    change_table :projects do |t|
      t.attachment :second_floor_plan
    end
  end

  def self.down
    remove_attachment :projects, :second_floor_plan
  end
end

class AddAttachmentModelToProjects < ActiveRecord::Migration[5.1]
  def self.up
    change_table :projects do |t|
      t.attachment :model
    end
  end

  def self.down
    remove_attachment :projects, :model
  end
end

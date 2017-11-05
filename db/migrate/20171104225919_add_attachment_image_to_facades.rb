class AddAttachmentImageToFacades < ActiveRecord::Migration[5.1]
  def self.up
    change_table :facades do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :facades, :image
  end
end

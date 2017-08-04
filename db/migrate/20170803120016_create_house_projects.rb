class CreateHouseProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :house_projects do |t|
      t.string :title
      t.decimal :square
      t.text :project_description
      t.integer :floors
      t.integer :rooms
      t.integer :bathrooms
      t.integer :cars_in_garage
      t.text :build_technology

      t.timestamps
    end
  end
end

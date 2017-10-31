class CreateProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|
      t.string :title
      t.decimal :area
      t.text :description
      t.boolean :mansard
      t.boolean :terrace
      t.boolean :garage
      t.integer :floors
      t.integer :rooms
      t.text :first_floor_desc
      t.text :second_floor_desc

      t.timestamps
    end
  end
end

class ChangeAreaInProjects < ActiveRecord::Migration[5.1]
  def change
    change_column :projects, :area, :decimal, precision: 10, scale: 2
  end
end

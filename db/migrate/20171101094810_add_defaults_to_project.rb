class AddDefaultsToProject < ActiveRecord::Migration[5.1]
  def change
    change_column_default :projects, :title, ''
    change_column_default :projects, :description, ''
    change_column_default :projects, :mansard, false
    change_column_default :projects, :terrace, false
    change_column_default :projects, :garage, false
    change_column_default :projects, :first_floor_desc, ''
    change_column_default :projects, :second_floor_desc, ''
  end
end

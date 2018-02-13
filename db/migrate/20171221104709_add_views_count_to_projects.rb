class AddViewsCountToProjects < ActiveRecord::Migration[5.1]
  def change
    add_column :projects, :views_count, :integer, default: 0
  end
end
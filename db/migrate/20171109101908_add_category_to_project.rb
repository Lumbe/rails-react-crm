class AddCategoryToProject < ActiveRecord::Migration[5.1]
  def change
    add_column :projects, :category, :string, default: ''
  end
end

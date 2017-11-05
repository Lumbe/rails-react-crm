class CreateFacades < ActiveRecord::Migration[5.1]
  def change
    create_table :facades do |t|
      t.references :project, foreign_key: true

      t.timestamps
    end
  end
end

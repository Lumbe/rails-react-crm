class CreateMemberships < ActiveRecord::Migration[5.1]
  def change
    create_table :memberships do |t|
      t.references :user, foreign_key: true
      t.references :department, foreign_key: true
      t.integer :role

      t.timestamps
    end
  end
end

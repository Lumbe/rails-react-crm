class CreateDepartments < ActiveRecord::Migration[5.1]
  def change
    create_table :departments do |t|
      t.string :name
      t.string :city
      t.string :address
      t.string :website
      t.string :email

      t.timestamps
    end
  end
end

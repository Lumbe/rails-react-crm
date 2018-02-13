class CreateContacts < ActiveRecord::Migration[5.1]
  def change
    create_table :contacts do |t|
      t.string :name
      t.references :user, foreign_key: true
      t.integer :assigned_to
      t.string :phone
      t.string :email
      t.string :string
      t.string :location
      t.string :project
      t.string :square
      t.string :floor
      t.string :question
      t.string :region
      t.string :source
      t.boolean :online_request
      t.boolean :come_in_office
      t.boolean :phone_call
      t.references :department, foreign_key: true
      t.integer :status, default: 0
      t.string :alt_email
      t.boolean :do_not_call, default: false

      t.timestamps
    end
  end
end

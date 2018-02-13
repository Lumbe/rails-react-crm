class AddDefaultForRoleToMemberships < ActiveRecord::Migration[5.1]
  def change
    change_column_default :memberships, :role, 0
  end
end

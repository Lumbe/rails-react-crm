class AddFieldsToLeads < ActiveRecord::Migration[5.1]
  def change
    add_column :leads, :location, :string
    add_column :leads, :project, :string
    add_column :leads, :square, :string
    add_column :leads, :floor, :string
    add_column :leads, :question, :text
    add_column :leads, :region, :string
    add_column :leads, :source, :string
    add_column :leads, :online_request, :boolean, default: false
    add_column :leads, :come_in_office, :boolean, default: false
    add_column :leads, :phone_call, :boolean, default: false
    add_column :leads, :status, :integer, default: 0
    add_column :leads, :user_id, :integer
    add_column :leads, :assigned_to, :integer
    add_column :leads, :department_id, :integer
    add_column :leads, :contact_id, :integer
  end
end

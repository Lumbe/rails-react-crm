class Api::V1::Admin::DepartmentsController < Api::V1::ApplicationController
  before_action :load_department, only: [:show, :update]

  def index
    departments = Department.all.order(created_at: :desc).page(params[:page] || 1)
    respond_with departments, meta: pagination_meta(departments)

  end

  def show
    respond_with @department
  end

  def create
    @department = Department.create(department_params)
    respond_with :api, :v1, :admin, @department
  end

  def update
    @department.update_attributes(department_params)
    respond_with @department, json: @department
  end

  def destroy
    respond_with Department.destroy(params[:id])
  end

  private

  def load_department
    @department = Department.find(params[:id])
  end

  def department_params
    params.require(:department).permit(:name, :city, :address, :website, :email)
  end
end

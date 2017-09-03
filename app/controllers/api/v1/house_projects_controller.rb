class Api::V1::HouseProjectsController < Api::V1::ApplicationController
  before_action :load_house_project, only: [:show, :update]

  def index
    respond_with HouseProject.all
  end

  def show
    respond_with @house_project
  end

  def create
    respond_with :api, :v1, HouseProject.create(house_project_params)
  end

  def update
    @house_project.update_attributes(house_project_params)
    respond_with @house_project, json: @house_project
  end

  def destroy
    respond_with HouseProject.destroy(params[:id])
  end

  private

  def load_house_project
    @house_project = HouseProject.find(params[:id])
  end

  def house_project_params
    params.require(:house_project).permit(:title, :square, :project_description, :floors, :rooms, :bathrooms, :cars_in_garage, :build_technology)
  end
end

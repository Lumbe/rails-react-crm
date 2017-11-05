class Api::V1::ProjectsController < Api::V1::ApplicationController
  skip_before_action :authenticate_user_with_jwt!, only: :public
  skip_before_action :authenticate_user_from_header_token, only: :public
  before_action :load_project, only: [:show, :update]

  def index
    projects = Project.all.page(params[:page] || 1)
    respond_with projects, meta: pagination_meta(projects)
  end

  def show
    respond_with @project
  end

  def create
    respond_with :api, :v1, Project.create(project_params)
  end

  def update
    @project.update_attributes(project_params)
    respond_with @project, json: @project
  end

  def destroy
    respond_with Project.destroy(params[:id])
  end

  def public
    projects = Project.all.page(params[:page] || 1)
    respond_with projects, meta: pagination_meta(projects)
  end

  private

  def load_project
    @project = Project.find(params[:id])
  end

  def project_params
    params.require(:project).permit(:title, :area, :description, :mansard, :terrace, :garage,
                                    :first_floor_desc, :second_floor_desc, :model, :photo,
                                    facades_attributes: [:image])
  end
end

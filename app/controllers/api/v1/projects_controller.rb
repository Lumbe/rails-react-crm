class Api::V1::ProjectsController < Api::V1::ApplicationController
  skip_before_action :authenticate_user_with_jwt!, only: [:public, :show]
  skip_before_action :authenticate_user_from_header_token, only: [:public, :show]
  before_action :load_project, only: [:show, :update]
  has_scope :title_search, as: :search
  has_scope :by_category, as: :category
  has_scope :by_min_area, as: :minArea
  has_scope :by_max_area, as: :maxArea
  has_scope :by_floors, as: :floors
  has_scope :with_mansard, as: :mansard, type: :boolean
  has_scope :with_terrace, as: :terrace, type: :boolean
  has_scope :with_garage, as: :garage, type: :boolean
  has_scope :is_hitech, as: :hitech, type: :boolean

  def index
    projects = Project.all.order(created_at: :desc).page(params[:page] || 1)
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
    projects = apply_scopes(Project).all.order(created_at: :desc).page(params[:page] || 1).per(10)
    respond_with projects, meta: pagination_meta(projects)
  end

  private

  def load_project
    @project = Project.friendly.find(params[:id])
  end

  def project_params
    params.require(:project).permit(:title, :area, :description, :mansard, :terrace, :garage,
                                    :first_floor_desc, :second_floor_desc, :model, :hitech, :category,
                                    :first_floor_plan, :second_floor_plan, :third_floor_plan,
                                    facades_attributes: [:image], photos_attributes: [:image])
  end
end

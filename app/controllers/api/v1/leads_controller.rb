class Api::V1::LeadsController < Api::V1::ApplicationController
  before_action :load_lead, only: [:show, :update]

  def index
    # leads = Lead.all.order(created_at: :desc).page(params[:page] || 1)
    leads = Lead.where(department: current_user.departments).order(created_at: :desc).page(params[:page] || 1)
    respond_with leads, meta: pagination_meta(leads)

  end

  def show
    respond_with @lead
  end

  def create
    @lead = Lead.create(lead_params)
    respond_with :api, :v1, @lead
  end

  def update
    @lead.update_attributes(lead_params)
    respond_with @lead, json: @lead
  end

  def destroy
    asdasd
    respond_with Lead.destroy(params[:id])
  end

  private

  def load_lead
    @lead = Lead.find(params[:id])
  end

  def lead_params
    params.require(:lead).permit(:name, :email, :phone, :department, :status)
  end
end

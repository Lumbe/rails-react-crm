class Api::V1::LeadsController < Api::V1::ApplicationController
  before_action :load_lead, only: [:show, :update]

  def index
    leads = Lead.all.page(params[:page] || 1)
    respond_with leads, meta: pagination_meta(leads)

  end

  def show
    respond_with @lead
  end

  def create
    respond_with :api, :v1, Lead.create(lead_params)
  end

  def update
    @lead.update_attributes(lead_params)
    respond_with @lead, json: @lead
  end

  def destroy
    respond_with Lead.destroy(params[:id])
  end

  private

  def load_lead
    @lead = Lead.find(params[:id])
  end

  def lead_params
    params.require(:lead).permit(:name, :email, :phone)
  end
end

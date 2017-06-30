class Api::V1::LeadsController < ApplicationController
  respond_to :json
  def index
    @leads = Lead.all
    respond_with @leads
  end
end

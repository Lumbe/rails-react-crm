class Api::V1::LeadsController < Api::V1::ApplicationController
  respond_to :json
  def index
    respond_with Lead.all
  end
end

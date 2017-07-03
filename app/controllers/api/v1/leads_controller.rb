class Api::V1::LeadsController < Api::V1::ApplicationController
  def index
    respond_with Lead.all
  end
end

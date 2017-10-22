class HomeController < ApplicationController

  def index
    respond_to do |format|
      format.html
      format.js
      format.json
    end
  end
  def robots
    respond_to :text
  end
end

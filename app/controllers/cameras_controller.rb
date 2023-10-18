class CamerasController < ApplicationController
  def index
    @cameras = Camera.all
  end

  def new
    @camera = Camera.new
  end
end

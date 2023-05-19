class PositionsController < ApplicationController

    def index 
        positions = Position.all
        render json: positions,  status: :ok
  end

end

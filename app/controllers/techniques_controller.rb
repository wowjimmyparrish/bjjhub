class TechniquesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    before_action :authorize
    skip_before_action :authorize, only: [:index, :show]

    def index 
        techniques = Technique.all
        render json: techniques, include: [:user, :comments], status: :ok
  end

  def show 
    technique = find_technique
    if technique 
        render json: technique, status: :ok 
    else 
        render json: {error: "Not found"}, status: :not_found 
    end
end 

    
    def create
        technique = current_user.created_techniques.create!(technique_params) 
        render json: technique, status: :created 
    end

    def destroy 
        technique = find_technique
      
        if technique && technique.user_id == session[:user_id]
          technique.destroy 
          render json: {}
        elsif technique.nil?
          render json: { error: "Not found" }, status: :not_found
        else
          render json: { error: "Unauthorized" }, status: :unauthorized
        end
      end


    private

    def technique_params
        params.permit(:name, :video, :is_favorite, :position_id)
    end

    def find_technique
        Technique.find_by(id: params[:id]) 
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def authorize
        return render json: { error: "Not authorized, please log in" }, status: :unauthorized unless session.include? :user_id
      end
end

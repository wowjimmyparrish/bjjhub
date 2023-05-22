class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :user_not_logged_in

    def create 
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show 
        user = User.find_by!(id: session[:user_id]) 
     # Logged in users created_techniques w/ associated position, comments with associated technique and position.  adapter: nil bypasses user serializer. 
    render json: user, include: { created_techniques: { include: :position }, comments: { include: { technique: { include: :position } } } }, adapter: nil
    end

    private 

    def user_not_logged_in
        return render json: {error: "User is not logged in"}, status: :unauthorized
    end

    def user_params 
        params.permit(:username, :password, :password_confirmation)
    end

      def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity unless session.include? :user_id
    end

    
end


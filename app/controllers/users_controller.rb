class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :userNotLoggedIn
    

    def create 
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show 
            if params[:id]
                user = User.find(params[:id])
            else 
        user = User.find_by!(id: session[:user_id]) 
                                        # Logged in users created_workouts and reviews with associated workout.  adapter: nil bypasses user serializer. 
            end  
                     
        render json: user, include: [:created_techniques, :comments => {:include => :technique} ], adapter: nil
    end


    def update 
        user = find_user 
        if user.id == session[:user_id]
            user.update(user_params)
            render json: user, status: :ok
        else
            render json: { error: "unauthorized" }, status: :unauthorized
          end
        end

    private 

    def userNotLoggedIn
        return render json: {error: "User is not logged in"}, status: :unauthorized
    end

    def find_user
        User.find_by(id: params[:id]) 
    end

    def user_params 
        params.permit(:username, :age, :rank, :password, :password_confirmation)
    end

      def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity unless session.include? :user_id
    end

    
end


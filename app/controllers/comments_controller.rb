class CommentsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    before_action :authorize
    skip_before_action :authorize, only: [:index, :show]

    def index 
          comments = Comment.all
          render json: comments, include: [:user, :technique], status: :ok
    end 
    

    def show 
        comment = find_comment 
        if comment 
            render json: comment, status: :ok 
        else 
            render json: {error: "Review not found"}, status: :not_found 
        end
    end 

    def create 
        comment = current_user.comments.create!(comment_params)
        render json: comment, status: :created 
    end 

    def update 
        comment = find_comment 
        if comment && comment.user_id == session[:user_id]
            comment.update(comment_params)
            render json: comment, status: :ok
        else
            render json: { error: "unauthorized" }, status: :unauthorized
          end
        end
    

        def destroy 
            comment = find_comment
          
            if comment && comment.user_id == session[:user_id]
              comment.destroy 
              render json: {}
            elsif comment.nil?
              render json: { error: "Review not found" }, status: :not_found
            else
              render json: { error: "Unauthorized" }, status: :unauthorized
            end
          end


    private 

    def find_comment
        Comment.find_by(id: params[:id]) 
    end

    def comment_params 
        params.permit(:comment, :technique_id)
    end
    
    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
      end


end



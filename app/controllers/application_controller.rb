class ApplicationController < ActionController::API
    include ActionController::Cookies
    
     # find the user id stored in the session hash & save to instance variable so the user can be retrieved from the instance variable 
    def current_user
        @current_user = User.find_by(id: session[:user_id])
      end
   
    
end

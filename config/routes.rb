Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  resources :comments

  resources :techniques do
    resources :comments, only: [:show, :index]
  end

  resources :users do
    resources :techniques, only: [:show, :index]
  end

  resources :users do
    resources :comments, only: [:show, :index]
  end
  resources :positions, only: [:index]
  
  
 post "/signup", to: "users#create"
 get "/me", to: "users#show"
 post "/login", to: "sessions#create"
 delete "/logout", to: "sessions#destroy"
  
# This custom route is for deploying
  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
  
end

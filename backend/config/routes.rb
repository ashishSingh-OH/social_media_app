Rails.application.routes.draw do
  resources :comments
  resources :posts
  # resources :
  resources :sessions, only: [:create]
  resources :registrations, only: [:create] 
  root to: "static#home"
  delete :logout, to: "sessions#logout"
  get :logged_in, to: "sessions#logged_in"

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

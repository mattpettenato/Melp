Rails.application.routes.draw do
  
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]

    resources :users, only: [:create, :show] do
      resources :reviews, only:[:index]
    end

    resources :businesses, only: [:index, :show] do
      resources :reviews, only: [:create, :index]
    end

    resources :reviews, only:[:show, :update, :destroy]
  
  end

  root to: "static_pages#root"

end

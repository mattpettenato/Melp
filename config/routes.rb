Rails.application.routes.draw do
  
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :users, only: [:create, :show] do
      resources :reviews, only:[:index]
    end
    resource :session, only: [:create, :destroy]
  end

end

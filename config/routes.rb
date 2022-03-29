Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, only:[:create, :show, :update, :index] do 
      resources :reviews, only:[:index]
    end
    resources :businesses, only:[:index, :show] do 
      resources :reviews, only:[:create, :index, :show]
      collection do 
        get :search, to: "businesses#search", as: "search"
        # get :location, to: "businesses#location", as: "location"
      end
    end
    resource :session, only: [:create, :destroy]
    resources :reviews, only:[:show, :update, :destroy]
    match '/users',   to: 'users#index',   via: 'get'
  end
  root to: "static_pages#root"
end

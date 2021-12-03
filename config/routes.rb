# Rails.application.routes.draw do
#   root to: "static_pages#root"
  
#   namespace :api, defaults: {format: :json} do
#     resource :session, only: [:create, :destroy]

#     resources :users, only: [:create, :show] do
#       resources :reviews, only:[:index]
#     end

#     resources :businesses, only: [:index, :show] do
#       resources :reviews, only: [:create, :index]
#     end

#     resources :reviews, only:[:create, :show, :update, :destroy]
  
#   end


# end

Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :businesses, only: [:create, :update, :index, :destroy, :show]
    resources :reviews, only: [:create, :update, :index, :destroy, :show]
  end
end

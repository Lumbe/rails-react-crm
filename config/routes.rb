Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      namespace :admin do
        resources :users
        resources :departments
      end
      devise_for :users
      devise_scope :user do
        get 'users/current', to: 'sessions#current'
      end
      # resources :users, only: [:index, :create, :destroy, :update]
      resources :leads
      resources :contacts
      get '/projects/public', to: 'projects#public'
      get '/projects/all', to: 'projects#all'
      get '/projects/popular', to: 'projects#popular'
      get '/projects/meta', to: 'projects#meta'
      get '/projects/public/:id', to: 'projects#public_show'
      resources :projects
    end
  end
  root 'home#index'
  get '/robots.txt', to: 'home#robots'
  get '*path', to: 'home#index'
end

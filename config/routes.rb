Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      devise_for :users
      devise_scope :user do
        get 'users/current', to: 'sessions#current'
      end
      # resources :users, only: [:index, :create, :destroy, :update]
      resources :leads
      resources :house_projects
    end
  end
  root 'home#index'
  get '*path', to: 'home#index'
end

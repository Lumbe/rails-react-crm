Rails.application.routes.draw do
  devise_for :users
  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      # resources :users, only: [:index, :create, :destroy, :update]
      resources :leads
      resources :house_projects
    end
  end
  root 'home#index'
  get '*path', to: 'home#index'
end

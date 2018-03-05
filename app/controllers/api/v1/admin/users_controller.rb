class Api::V1::Admin::UsersController < Api::V1::ApplicationController
before_action :load_user, only: [:show, :update]

def index
  users = User.all.order(created_at: :desc).page(params[:page] || 1)
  respond_with users, meta: pagination_meta(users)

end

def show
  respond_with @user
end

def create
  @user = User.create(user_params)
  respond_with :api, :v1, :admin, @user
end

def update
  @user.update_attributes(user_params)
  respond_with @user, json: @user
end

def destroy
  respond_with User.destroy(params[:id])
end

private

def load_user
  @user = User.find(params[:id])
end

def user_params
  params.require(:user).permit(:first_name, :last_name, :email, :password)
end
end

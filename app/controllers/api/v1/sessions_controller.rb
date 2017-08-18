class Api::V1::SessionsController < Devise::SessionsController
  skip_before_action :authenticate_user_with_jwt!, only: :create
  def default_serializer_options
    { serializer: SessionSerializer }
  end

  def current
    respond_with current_user, serializer: UserSerializer
  end

  protected

  def resource_name
    :user
  end
end

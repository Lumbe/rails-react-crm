class Api::V1::SessionsController < Devise::SessionsController
  before_action :authenticate_user_with_jwt!, only: [:current]

  def default_serializer_options
    {serializer: SessionSerializer}
  end

  def current
    respond_with current_user, serializer: UserSerializer
  end

  def resource_name
    :user
  end
end

class Api::V1::ApplicationController < ApplicationController
  # before_action :authenticate_user_with_jwt!
  respond_to :json
  protect_from_forgery with: :null_session
  before_action :authenticate_user_from_header_token
  prepend_before_action :skip_devise_tracking

  # skip sign_in count in Devise
  def skip_devise_tracking
    request.env['devise.skip_trackable'] = true
  end

  def authenticate_user_from_header_token
    authenticate_with_http_token do |token|
      data = ::JwtWebToken.decode(token)
      user = User.find_by(id: data[:id])
      if user && Devise.secure_compare(user.access_token, data[:access_token])
        sign_in(user, store: false)
        return
      end
    end
  rescue JWT::VerificationError, JWT::DecodeError, JWT::ExpiredSignature
  end

  def authenticate_user_with_jwt!
    return if current_user
    respond_with({ error: t('unauthorized') }, status: 401)
  end

  %i[_render_option_json _render_with_renderer_json].each do |renderer_method|
    define_method renderer_method do |resource, options|
      options = default_serializer_options.merge(options) if resource.is_a?(ActiveRecord::Base) || resource.is_a?(ActiveRecord::Relation)
      super(resource, options)
    end
  end

  def default_serializer_options
    {}
  end
end

class Api::V1::ApplicationController < ApplicationController
  protect_from_forgery with: :null_session
  respond_to :json

  before_action :authenticate_user_from_header_token
  before_action :authenticate_user_with_jwt!
  prepend_before_action :skip_devise_tracking
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

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

  # skip sign_in count in Devise
  def skip_devise_tracking
    request.env['devise.skip_trackable'] = true
  end

  # override respond_with internal methods (gem 'responders')
  # to include SessionsController#default_serializer_options.
  # It allows to not pass :serializer parameter
  # (e.g. respond_with Lead.all, serializer: LeadSerializer)
  # to every respond_with calls.
  %i[_render_option_json _render_with_renderer_json].each do |renderer_method|
    define_method renderer_method do |resource, options|
      options = default_serializer_options.merge(options) if resource.is_a?(ActiveRecord::Base) || resource.is_a?(ActiveRecord::Relation)
      super(resource, options)
    end
  end

  def default_serializer_options
    {}
  end

  def render_unprocessable_entity_response(exception)
    render json: exception.record.errors, status: :unprocessable_entity
  end

  def render_not_found_response(exception)
    render json: { error: exception.message }, status: :not_found
  end

  def pagination_meta(resource)
    {
      current_page: resource.current_page,
      per_page: resource.limit_value,
      total_pages: resource.total_pages,
      next_page: resource.next_page,
      prev_page: resource.prev_page
    }
  end
end

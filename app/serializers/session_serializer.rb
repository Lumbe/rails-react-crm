class SessionSerializer < ActiveModel::Serializer
  attributes :token

  def user_id
    object.id
  end

  def user_email
    object.email
  end

  def token_type
    'Bearer'
  end

  def token
    ::JwtWebToken.encode({id: user_id, access_token: object.generate_access_token_and_save.access_token})
  end
end

class SessionSerializer < ActiveModel::Serializer
  attributes :token_type, :user_id, :access_token

  def user_id
    object.id
  end

  def token_type
    'Bearer'
  end

  def access_token
    ::JwtWebToken.encode({id: object.id, access_token: object.generate_access_token_and_save.access_token})
  end
end

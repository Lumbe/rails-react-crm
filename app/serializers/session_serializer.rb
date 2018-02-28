class SessionSerializer < ActiveModel::Serializer
  attributes :token, :id, :email, :first_name, :last_name, :departments

  def user_id
    object.id
  end

  def token_type
    'Bearer'
  end

  def token
    ::JwtWebToken.encode({id: user_id, access_token: object.generate_access_token_and_save.access_token})
  end
end

class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :first_name, :last_name, :admin, :current_sign_in_ip, :last_sign_in_ip, :sign_in_count, :access_token, :departments

end

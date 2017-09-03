class JwtWebToken
  class << self
    def encode(payload)
      JWT.encode(payload, Rails.application.secrets.secret_key_base, 'HS512')
    end

    def decode(token)
      HashWithIndifferentAccess.new(JWT.decode(token, Rails.application.secrets.secret_key_base, true, algorithm: 'HS512').first)
    end
  end
end

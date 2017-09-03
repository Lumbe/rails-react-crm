class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  before_create :generate_access_token
  before_update :generate_access_token, if: ->(user) { user.access_token.blank? }

  def generate_access_token(force = false)
    if force || !access_token || (!access_token_expired_at || access_token_expired_at < Time.zone.now)
      self.access_token_expired_at = Time.zone.now + 2.weeks
      3.times do
        self.access_token = Devise.friendly_token
        return self unless User.where(access_token: access_token).exists?
      end
      self.access_token, self.access_token_expired_at = nil, nil
    end
    self
  end

  def generate_access_token_and_save(force = false)
    generate_access_token(force).save
    self
  end
end

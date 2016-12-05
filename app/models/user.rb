class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
  :recoverable, :rememberable, :trackable, :validatable,
  :omniauthable, :omniauth_providers => [:facebook]
  acts_as_token_authenticatable

  attachment :image, type: :image
  has_many :reviews
  acts_as_follower
  acts_as_followable
  acts_as_mentionable
  acts_as_mentioner

  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.email = auth.info.email
      user.password = Devise.friendly_token[0,20]
      user.name = auth.info.name   # assuming the user model has a name
      user.remote_image_url = auth.info.image # assuming the user model has an image
      user.fb_token = auth.credentials.token
      user.fb_id = auth.extra.raw_info.id
      puts auth.inspect
    end
  end

  # def self.find_for_facebook_oauth(response, signed_in_resource=nil)
  #  data = response['extra']['user_hash']
  #  access_token = response['credentials']['token']
  #  user = User.find_by_email(data["email"])
  #  # only log in confirmed users
  #  # that way users can't spoof accounts
  #  if user and user.confirmed?
  #    user.update_attribute('fb_token', access_token)
  #    user
  #  end
  # end

end

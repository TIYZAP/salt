class User < ApplicationRecord
  has_merit

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
  :recoverable, :rememberable, :trackable, :validatable,
  :omniauthable, :omniauth_providers => [:facebook]
  acts_as_token_authenticatable
  after_create :welcome_email


  attachment :image, type: :image
  has_many :reviews
  acts_as_follower
  acts_as_followable


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

  private

  def welcome_email
    UserNotifier.send_signup_email(self).deliver
  end

  def self.send_reminders
    User.all.each do |user|
      if (user.reviews.last == nil) && (user.created_at < 7.day.ago)
        RemindersMailer.no_reviews(user).deliver
      elsif user.reviews.last == nil
        puts 'doh'
      elsif user.reviews.last.created_at < 7.day.ago
        RemindersMailer.send_reminder(user).deliver
      end
    end
  end
end

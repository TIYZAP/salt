class KoalaController < ApplicationController

  acts_as_token_authentication_handler_for User, except: [:show]

  def follow_facebook
    @user = current_user
    @graph = Koala::Facebook::API.new(@user.fb_token)
    friends = @graph.get_connections("me", "friends")
    friends.each do |f|
      @thing = User.find_by(fb_id: f['id'])
      puts f['name'].inspect
      puts f.inspect
      @user.follow!(@thing)
    end
    @followees = @user.followees(User)
    render json: @followees
  end

  def test
    @user = current_user
    @graph = Koala::Facebook::API.new(@user.fb_token)
    friends = @graph.get_connections("me", "friends")
    render json: friends
  end

  def email_test
    @user = current_user
    UserNotifier.send_signup_email(@user).deliver
  end

end

class KoalaController < ApplicationController

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

end

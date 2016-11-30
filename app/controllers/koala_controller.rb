class KoalaController < ApplicationController

  def test
    @user = current_user
    @graph = Koala::Facebook::API.new(@user.fb_token)
    friends = @graph.get_connections("me", "friends")
    render json: friends
  end

end

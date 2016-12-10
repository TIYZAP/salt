class KoalaController < ApplicationController

  acts_as_token_authentication_handler_for User, except: [:show]



  def test
    @user = current_user
    @graph = Koala::Facebook::API.new(@user.fb_token)
    friends = @graph.get_connections("me", "friends")
    render json: friends
  end

end

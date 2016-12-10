class UserController < ApplicationController
acts_as_token_authentication_handler_for User, except: [:index, :show]


  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def all_friends
    @user = current_user
    @followees = @user.followees(User)
    render json: @followees.sort_by {|user| user.review_count}.reverse
  end

  def unfollow_user
    @user = current_user.unfollow!(User.find(params[:id]))
    render json: @user
  end

  def search_for_friends
  @users =   User.where("name ilike ?", "%#{params[:name]}%")
  render json: @users
  end

  def follow_one_friend
    @user = current_user
    @user.follow!(User.find(params[:id]))
    render json: @user
  end

  def send_invites
    @user = current_user
    @invitees = params[:emails].split(",").collect(&:strip)
    puts @emails.inspect
    @invitees.each do |email|
      InviteMailer.send_friends_invites(email, @user).deliver
    end
    render json: @user
  end

  def follow_facebook
    @user = current_user
    @graph = Koala::Facebook::API.new(@user.fb_token)
    friends = @graph.get_connections("me", "friends")
    friends.each do |f|
      @thing = User.find_by(fb_id: f['id'])
      puts f['name'].inspect
      puts f.inspect
      @user.follow!(@thing) if @thing
    end
    @followees = @user.followees(User)
    render json: @followees
  end

end

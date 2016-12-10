class UserController < ApplicationController
acts_as_token_authentication_handler_for User, except: [:index, :show]


  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def all_friends
    @user = current_user
    @followees = @user.followees(User)
    render json: @followees.order(review_count: :desc)
  end

  def unfollow_user
    @user = current_user.unfollow!(User.find(params[:id]))
    render json: @user
  end
  
  def email_test
    @user = current_user
    UserNotifier.send_signup_email(@user).deliver
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

end

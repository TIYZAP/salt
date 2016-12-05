class UserController < ApplicationController
acts_as_token_authentication_handler_for User, except: [:index, :show]


  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def all_friends
    @user = current_user
    @followees = @user.followees(User)
    render json: @followees
  end

  def unfollow_user
    @user = current_user.unfollow!(User.find(params[:id]))
    render json: @user
  end

  def mentions
    @user = current_user
    @mentions = @user.mention!(User.find(params[:id]))
    render json: @mentions
  end

  def email_test
    @user = current_user
    UserNotifier.send_signup_email(@user).deliver
  end

end

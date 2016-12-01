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


end

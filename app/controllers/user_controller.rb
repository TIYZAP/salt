class UserController < ApplicationController
before_action :authenticate_user!, except: [:show]
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

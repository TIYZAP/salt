class ReviewsController < ApplicationController

  before_action :authenticate_user!, except: [:show]

  def index
    @reviews = Review.timeline(current_user)
    render json: @reviews
  end

  def create
    @review = Review.new(review_params)
    if current_user.reviews << @review
      render json: @review
    else
      render json: @review.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
    @review = Review.find(params[:id])
    render json: @review
  end

  def update
  end

  def destroy
  end

  private

  def review_params
    params.permit(:venue_name, :venue_address, :place_id, :dish, :body, :rating)
  end


end

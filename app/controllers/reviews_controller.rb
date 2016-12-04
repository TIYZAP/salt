class ReviewsController < ApplicationController

  acts_as_token_authentication_handler_for User, except: [:show]

  def timeline
    if current_user
      @reviews = Review.timeline(current_user).page(params[:page] || 1).per(10)
      render json: @reviews, meta: pagination_dict(@reviews)
    else
      render json: "You must logged in!"
    end
  end

  def pagination_dict(object)
    {
      current_page: object.current_page,
      next_page: object.next_page,
      total_pages: object.total_pages,
      total_count: object.total_count
    }
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
    @review = Review.find(params[:id])
    @review.reviews = params[:body]
    if @review.save
      render json: @review
    else
      render json: @review.erros.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy!
    render json: "Your review has been removed!"
  end

  private

  def review_params
    params.permit(:venue_name, :venue_address, :place_id, :dish, :body, :rating, :image)
  end


end

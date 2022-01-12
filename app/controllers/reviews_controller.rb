class Api::ReviewsController < ApplicationController

def show
  @review = Review.find(params[:id])
end

def index
  @reviews = Review.all.where(business_id: params[:business_id])
end

def create
  @review = Review.new(review_params)

  if @review.save
    render :show
  else
    render json: @business.errors.full_messages, status: 422
  end
end

def destroy
  @review = Review.find_by(id: params[:id])
  if @review.destroy
  render :show
  else
  render json: ['Cannot find the specified review'], status: 404
  end
end

private

def review_params
  params.require(:review).permit(:body, :rating, :author_id, :business_id)
end

end

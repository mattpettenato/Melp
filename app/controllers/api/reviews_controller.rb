class Api::ReviewsController < ApplicationController

def show
  @review = Review.find(params[:id])
  render :show
end

def create
    @review = Review.new(review_params)
    if !@review.author_id
        @review.author_id = current_user.id
    end   
    if @review.save && @review.rating
        render :show
    else
        render json: ['Make sure to select stars for rating'], status: 422
    end
end

def index
  @reviews = Review.all
  render :index
end

def destroy
  @review = Review.find(params[:id])
  if @review.destroy
    render :show
  else
    render json: ['Cannot find the specified review'], status: 404
  end
end

private

  def review_params
    params.require(:review).permit(:body, :rating, :author_id, :name, :business_id)
  end

end



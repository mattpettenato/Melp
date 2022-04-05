class Api::BusinessesController < ApplicationController
  skip_before_action :verify_authenticity_token
  def show
    @business = Business.find(params[:id])
    render :show
  end

  def index
    # @businesses = Business.all
    @businesses = category ? Business.search_category(category) : Business.all
    render :index
  end

  def create
    @business = Business.new(business_params)
    if @business.save
        render :show
    else
        render json: @business.errors.full_messages, status: 422
    end
  end

  def update
      @business = Business.find(params[:id])
      @business.update(business_params)
  end

  def category
    params[:category]
  end

  private

  def business_params
    params.require(:business).permit(:name, :about, :rating, :phone, :address, :hours, :websiteurl, :lat, :lng, photos: [])
  end
end
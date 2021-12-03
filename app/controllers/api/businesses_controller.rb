class Api::BusinessesController < ApplicationController
  
  def show
    @business = Business.find(params[:id])
    render :show
  end

  # def show
  #   @business = Business.with_attached_photos.find(params[:id])
  #   render :show
  # end

  def index
    @businesses = Business.all
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

  private

  def business_params
    params.require(:business).permit(:name, :about, :rating, :phone, :address, :hours, photos: [])
  end
end
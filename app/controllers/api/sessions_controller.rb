class Api::SessionsController < ApplicationController

  # def new
  #   render :new
  # end

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login(@user)
      # render "api/users/show.json.jbuilder"
      # render "/"
      # redirect_to "/#"
      render "api/users/show"

    else
      render json: ["Invalid username/password combination"], status: 401
    end
  end

  # def destroy
  #   @user = current_user
  #   if @user
  #     logout
  #     # render "/"
  #     # render json:{}
  #     render "api/users/show.json.jbuilder"

  #   else
  #     render json: ["Nobody signed in"], status: 404
  #   end
  # end

  def destroy
    @user = current_user
    if @user
      logout
      # render "api/users/show"
      render "api/users/show.json.jbuilder"
    else
      render json: ["Nobody signed in"], status: 404
    end
  end
end

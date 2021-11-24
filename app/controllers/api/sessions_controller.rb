class Api::SessionsController < ApplicationController

  def new
    render :new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login(@user)
      # render "api/users/show"
      redirect_to user_url(@user)
    else
      render json: ["Invalid username/password combination"], status: 401
    end
  end

  def destroy
    # @user = current_user
    # if @user
    #   logout
    #   render "api/users/show"
    # else
    #   render json: ["Nobody signed in"], status: 404
    # end
    sign_out!
    redirect_to new_session_url
  end
end

# json.partial! "api/users/user", user: @user
json.extract! @user, :id, :email, :username
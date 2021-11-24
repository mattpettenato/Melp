# json.partial! "api/users/user", user: @user
# json.extract! @user, :id, :email, :username
json.extract! @user, :username, :id, :email

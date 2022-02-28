
import * as UserApiUtil from '../util/users_api_util'

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export const receiveUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user,
  }
}

export const fetchUser = (userId) => (dispatch) => {
  return UserApiUtil.fetchUser(userId).then(result => (
    dispatch(receiveUser(result))
  ))
}

export const updateUser = (userId, user) => (dispatch) => {
  return UserApiUtil.patchUser(userId, user).then(user => (
    dispatch(receiveUser(user))
  ))
}
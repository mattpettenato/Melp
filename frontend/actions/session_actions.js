// import * as APIUtil from '../util/session_api_util';

// export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
// export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
// export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
// export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";

// export const receiveCurrentUser = currentUser => ({
//   type: RECEIVE_CURRENT_USER,
//   currentUser
// });

// export const logoutCurrentUser = () => ({
//   type: LOGOUT_CURRENT_USER,
// });

// export const receiveSessionErrors = (errors) => {
//   return {
//     type: RECEIVE_SESSION_ERRORS,
//     errors
//   }
// };

// export const clearErrors = () => {
//   return {
//     type: CLEAR_SESSION_ERRORS
//   }
// }

// export const signup = (user) => dispatch => {
//   return APIUtil.signUp(user)
//     .then(user => dispatch(receiveCurrentUser(user)),
//       errors => dispatch(receiveSessionErrors(errors.responseJSON)))
// };

// export const login = user => dispatch => APIUtil.signIn(user)
//   .then(user => dispatch(receiveCurrentUser(user)), errors => (
//     dispatch(receiveSessionErrors(errors.responseJSON))
//   ))

// export const logout = () => (dispatch) =>
//   APIUtil.signOut().then(
//     () => dispatch(logoutCurrentUser()), errors => (
//       dispatch(receiveSessionErrors(errors.responseJSON))
//   ));

  

// import * as APIUtil from '../util/session_api_util'

// export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
// export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
// export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";

// export const receiveCurrentUser = currentUser => ({
//   type: RECEIVE_CURRENT_USER,
//   currentUser
// });

// export const receiveErrors = (errors) => ({
//   type: RECEIVE_SESSION_ERRORS,
//   errors
// });

// // export const clearErrors = () => {
// //   return {
// //     type: CLEAR_SESSION_ERRORS
// //   }
// // }

// export const signup = user => dispatch => (
//   APIUtil.signUp(user).then(user => (
//     dispatch(receiveCurrentUser(user))
//   ), err => (
//     dispatch(receiveErrors(err.responseJSON))
//   ))
// );

// export const login = user => dispatch => (
//   APIUtil.signIn(user).then(user => (
//     dispatch(receiveCurrentUser(user))
//   ), err => (
//     dispatch(receiveErrors(err.responseJSON))
//   ))
// );

// export const logout = () => dispatch => (
//   APIUtil.signOut().then(user => (
//     dispatch(receiveCurrentUser(null))
//   ))
// );
import * as APIUtil from '../util/session_api_util'


export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
// export const LOGOUT_USER = 'LOGOUT_USER'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';



export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
})

const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER,
  }
}

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
})

export const login = user => dispatch => APIUtil.signin(user)
  .then(currentUser => dispatch(receiveCurrentUser(currentUser)), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))

// export const logout = () => dispatch => APIUtil.signout()
//   .then(() => dispatch(logoutCurrentUser()))

// export const logout = () => dispatch => (
//   APIUtil.signout().then(user => (
//     dispatch(receiveCurrentUser(user))
//   ))
// );

export const logout = () => (dispatch) => {
  return APIUtil.signout().then(() => {
    return dispatch(logoutCurrentUser())
  },
    (err) => {
      return dispatch(receiveErrors(err.responseText))
    })
}

export const signup = user => dispatch => APIUtil.signup(user)
  .then(currentUser => dispatch(receiveCurrentUser(currentUser)), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))

export const fetchUser = (userId) => (dispatch) => {
  return APIUtil.fetchUser(userId).then((user) => {
    return dispatch(receiveCurrentUser(user));
  })
}

export const clearErrors = () => dispatch => {
  dispatch(receiveErrors([]))
}
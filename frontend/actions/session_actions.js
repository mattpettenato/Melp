import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveSessionErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  }
};

// export const clearErrors = () => ({
//   type: CLEAR_SESSION_ERRORS,
// });

export const clearErrors = () => {
  return {
    type: CLEAR_SESSION_ERRORS
  }
}

// export const signup = user => dispatch => APIUtil.signup(user)
//   .then(user => dispatch(receiveCurrentUser(user)), errors => (
//     dispatch(receiveErrors(errors.responseJSON))
//   ))

export const signup = (user) => dispatch => {
  return APIUtil.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)),
      errors => dispatch(receiveSessionErrors(errors.responseJSON)))
};

export const login = user => dispatch => APIUtil.login(user)
  .then(user => dispatch(receiveCurrentUser(user)), errors => (
    dispatch(receiveSessionErrors(errors.responseJSON))
  ))

export const logout = () => (dispatch) =>
  APIUtil.logout().then(
    () => dispatch(logoutCurrentUser()), errors => (
      dispatch(receiveSessionErrors(errors.responseJSON))
  ));

// export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
// export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
// export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
// export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";
// import * as SessionApiUtil from "../util/session_api_util";

// export const receiveCurrentUser = (currentUser) => ({
//   type: RECEIVE_CURRENT_USER,
//   currentUser,
// });

// export const logoutCurrentUser = () => ({
//   type: LOGOUT_CURRENT_USER,
// });

// export const receiveErrors = (errors) => ({
//   type: RECEIVE_SESSION_ERRORS,
//   errors,
// });

// export const clearErrors = () => ({
//   type: CLEAR_SESSION_ERRORS,
// });

// export const login = (formUser) => (dispatch) =>
//   SessionApiUtil.login(formUser).then(
//     (user) => dispatch(receiveCurrentUser(user)),
//     (err) => dispatch(receiveErrors(err.responseJSON))
//   );

// export const signup = (formUser) => (dispatch) =>
//   SessionApiUtil.signup(formUser).then(
//     (user) => dispatch(receiveCurrentUser(user)),
//     (err) => dispatch(receiveErrors(err.responseJSON))
//   );

// export const logout = () => (dispatch) =>
//   SessionApiUtil.logout().then(
//     () => dispatch(logoutCurrentUser()),
//     (err) => dispatch(receiveErrors(err.responseJSON))
//   );
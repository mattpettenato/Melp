// import {
//   RECEIVE_SESSION_ERRORS,
//   RECEIVE_CURRENT_USER,
// } from '../actions/session_actions';

// export default (state = [], action) => {
//   Object.freeze(state);
//   switch (action.type) {
//     case RECEIVE_SESSION_ERRORS:
//       return action.errors;
//     case RECEIVE_CURRENT_USER:
//       return [];
//     default:
//       return state;
//   }
// };

import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS, CLEAR_SESSION_ERRORS } from "../actions/session_actions";

const _nullErrors = [];

const sessionErrorsReducer = (state = _nullErrors, action) => {
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return _nullErrors;
    case CLEAR_SESSION_ERRORS:
      return _nullErrors;
    default:
      return state;
  }
};

export default sessionErrorsReducer;
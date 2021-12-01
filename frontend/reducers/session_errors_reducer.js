// // import {
// //   RECEIVE_SESSION_ERRORS,
// //   RECEIVE_CURRENT_USER,
// // } from '../actions/session_actions';

// // export default (state = [], action) => {
// //   Object.freeze(state);
// //   switch (action.type) {
// //     case RECEIVE_SESSION_ERRORS:
// //       return action.errors;
// //     case RECEIVE_CURRENT_USER:
// //       return [];
// //     default:
// //       return state;
// //   }
// // };

// // import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS, CLEAR_SESSION_ERRORS } from "../actions/session_actions";
// // import { CLOSE_MODAL } from '../actions/modal_actions';


// // const _nullErrors = [];

// // const sessionErrorsReducer = (state = _nullErrors, action) => {
// //   switch (action.type) {
// //     case RECEIVE_SESSION_ERRORS:
// //       return action.errors;
// //     case RECEIVE_CURRENT_USER:
// //       return _nullErrors;
// //     case CLEAR_SESSION_ERRORS:
// //       return _nullErrors;
// //     case CLOSE_MODAL:
// //       return [];

// //     default:
// //       return state;
// //   }
// // };

// // export default sessionErrorsReducer;

// // import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from "../actions/session_actions";

// // const sessionErrorReducer = (state = {}, action) => {
// //   Object.freeze(state)

// //   switch (action.type) {
// //     case RECEIVE_SESSION_ERRORS:
// //       let allErrors = {}
// //       action.errors.forEach(err => {
// //         let objectKey = err.split(' ')[0].toLowerCase()
// //         allErrors[objectKey] = err

// //       })
// //       return allErrors
// //     case RECEIVE_CURRENT_USER:
// //       return {}
// //     default:
// //       return state;
// //   }
// // }

// // export default sessionErrorReducer

// import {
//   RECEIVE_SESSION_ERRORS,
//   RECEIVE_CURRENT_USER,
// } from '../actions/session_actions';

// // import { CLOSE_MODAL } from '../actions/modal_actions';

// export default (state = [], action) => {
//   Object.freeze(state);
//   switch (action.type) {
//     case RECEIVE_SESSION_ERRORS:
//       return action.errors;
//     case RECEIVE_CURRENT_USER:
//     // case CLOSE_MODAL:
//       return [];

//     default:
//       return state;
//   }
// };

import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER, CLEAR_SESSION_ERRORS } from '../actions/session_actions';

const sessionErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  let newState = oldState.concat([]);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return newState.concat(action.errors);
    case RECEIVE_CURRENT_USER:
      return [];
    case CLEAR_SESSION_ERRORS:
      return [];
    default:
      return oldState;
  }
};

export default sessionErrorsReducer;
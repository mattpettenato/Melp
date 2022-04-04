// import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER, CLEAR_SESSION_ERRORS } from '../actions/session_actions';

// const sessionErrorsReducer = (oldState = [], action) => {
//   Object.freeze(oldState);
//   let newState = oldState.concat([]);
//   switch (action.type) {
//     case RECEIVE_SESSION_ERRORS:
//       return newState.concat(action.errors);
//     case RECEIVE_CURRENT_USER:
//       return [];
//     case CLEAR_SESSION_ERRORS:
//       return [];
//     default:
//       return oldState;
//   }
// };

// export default sessionErrorsReducer;

import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from "../actions/session_actions";

const sessionErrorReducer = (state = {}, action) => {
  Object.freeze(state);
  
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      let allErrors = {}
      action.errors.forEach(err => {
        let objKey = err.split(' ')[0].toLowerCase()
          allErrors[objKey] = err
      })
      return allErrors
    case RECEIVE_CURRENT_USER:
      return {}
    default: 
      return state;
  }
}

export default sessionErrorReducer
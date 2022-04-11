
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
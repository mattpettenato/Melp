import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_BUSINESS } from '../actions/business_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state)

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.currentUser.id]: action.currentUser })
    case RECEIVE_BUSINESS:
      const users = action.business.authors;
      return Object.assign({}, state, users)
    default:
      return state;
  }
}

export default usersReducer
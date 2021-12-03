import {
  RECEIVE_ALL_BUSINESSES,
  RECEIVE_BUSINESS,
  CLEAR_BUSINESS,
} from "../actions/business_actions";

const businessesReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_ALL_BUSINESSES:
      return action.businesses;
    // case RECEIVE_BUSINESS:
    //   return Object.assign({}, state, {
    //     [action.businesses.id]: action.businesses,
    //   });
    case RECEIVE_BUSINESS:
      return Object.assign({}, state, { [action.business.id]: action.business })
    case CLEAR_BUSINESS:
      delete nextState[action.businessId]
      return nextState
    default:
      return state;
  }
};

export default businessesReducer;

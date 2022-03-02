import { RECEIVE_REVIEW_ERRORS, REMOVE_ERRORS } from '../actions/review_actions'

const reviewsErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_REVIEW_ERRORS:
      return action.errors
    case REMOVE_ERRORS:
      return [];
    default:
      return state;
  }
}

export default reviewsErrorsReducer
import { RECEIVE_ALL_REVIEWS, RECEIVE_REVIEW, RETURN_SINGLE_REVIEW, RECEIVE_USER_REVIEWS, REMOVE_REVIEW } from '../actions/review_actions'
import { RECEIVE_BUSINESS } from '../actions/business_actions'

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_ALL_REVIEWS:
      return action.reviews
    case RECEIVE_REVIEW:
      return Object.assign({}, state, { [action.review.id]: action.review })

    case REMOVE_REVIEW:
      delete newState[action.reviewId]
      return newState
    case RECEIVE_BUSINESS:
      if (action.business.reviews){
        return action.business.reviews
      } else {
        return {}
      }
    default:
      return state;
  }
} 

export default reviewsReducer;
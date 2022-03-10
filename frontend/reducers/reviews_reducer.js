// import { RECEIVE_ALL_REVIEWS, RECEIVE_REVIEW, RETURN_SINGLE_REVIEW, RECEIVE_USER_REVIEWS, REMOVE_REVIEW } from '../actions/review_actions'

// const reviewsReducer = (state = {}, action) => {
//   Object.freeze(state);
//   let newState = Object.assign({}, state)
//   switch (action.type) {
//     case RECEIVE_ALL_REVIEWS:
//       let reviewArr = Object.values(action.reviews)
//       let firstReview = reviewArr[0]
//       newState[firstReview.business_id] = action.reviews;
//       return newState;
//     case RECEIVE_USER_REVIEWS:
//       newState = action.reviews;
//       return newState;
//     case RECEIVE_REVIEW:
//       return Object.assign(newState, action.payload.reviews);
//     case RETURN_SINGLE_REVIEW:
//       return action.review
//     case REMOVE_REVIEW:
//       delete newState[action.reviewId]
//       return newState
//     default:
//       return state;
//   }
// } 

// export default reviewsReducer;
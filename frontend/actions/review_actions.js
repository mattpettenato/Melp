import * as reviewsAPIUtil from '../util/reviews_api_util';

export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const CREATE_REVIEW = 'CREATE_REVIEW';
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const CLEAR_REVIEW_ERRORS = "CLEAR_REVIEW_ERRORS";
export const REMOVE_ERRORS = "REMOVE_ERRORS";
export const RETURN_SINGLE_REVIEW = "RETURN_SINGLE_REVIEW";
// export const RECEIVE_USER_REVIEWS = "RECEIVE_USER_REVIEWS"


export const clearReviewErrors = () => ({
  type: CLEAR_REVIEW_ERRORS,
})

export const receiveAllReviews = reviews => ({
  type: RECEIVE_ALL_REVIEWS, 
  reviews
})

export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
})

export const removeReview = reviewId => ({
  type: REMOVE_REVIEW,
  reviewId
})


export const receiveErrors = errors => {
  return ({
    type: RECEIVE_REVIEW_ERRORS,
    errors
  })
}

export const removeErrors = () => {
  return ({
    type: REMOVE_ERRORS
  })
}

export const returnSingleReview = review => {
  return ({
    type: RETURN_SINGLE_REVIEW,
    review
  })
}



export const fetchAllReviews = () => dispatch => reviewsAPIUtil.fetchAllReviews()
  .then(reviews => dispatch(receiveAllReviews(reviews)))


export const fetchReview = review => dispatch => reviewsAPIUtil.fetchReview(review)
  .then(review => dispatch(receiveReview(review)))


export const createReview = (businessId, review) => (dispatch) => {
  return reviewsAPIUtil.createReview(businessId, review)
  .then(
    review => (dispatch(receiveReview(review),
    errors => dispatch(receiveErrors(errors.reponse.JSON))
    )
  ))
}

export const deleteReview = reviewId => dispatch => reviewsAPIUtil.deleteReview(reviewId)
  .then(review => dispatch(removeReview(reviewId)))
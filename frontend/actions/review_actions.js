import * as reviewsAPIUtil from '../util/reviews_api_util';

export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const CREATE_REVIEW = 'CREATE_REVIEW';
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const CLEAR_REVIEW_ERRORS = "CLEAR_REVIEW_ERRORS";
export const REMOVE_ERRORS = "REMOVE_ERRORS";
export const RETURN_SINGLE_REVIEW = "RETURN_SINGLE_REVIEW";
export const RECEIVE_USER_REVIEWS = "RECEIVE_USER_REVIEWS"


export const clearReviewErrors = () => ({
  type: CLEAR_REVIEW_ERRORS,
})

export const receiveAllReviews = (reviews) => {
  return {
    type: RECEIVE_ALL_REVIEWS,
    reviews
  }
}

export const receiveReview = (review) => {
  return {
    type: RECEIVE_REVIEW,
    review
  }
}

export const receiveUserReviews = (reviews) => {
  return {
    type: RECEIVE_USER_REVIEWS,
    reviews
  }
}

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

export const fetchAllReviews = (businessId) => (dispatch) => {
  return reviewsAPIUtil.fetchAllReviews(businessId)
    .then(
      reviews => dispatch(receiveAllReviews(reviews)),
      // errors => dispatch(receiveErrors(errors.response.JSON))
    )
}

export const fetchReview = (reviewId) => (dispatch) => {
  return reviewsAPIUtil.fetchReview(reviewId)
    .then(
      review => dispatch(receiveReview(review)),
      errors => dispatch(receiveErrors(errors.response.JSON))
      )
}

export const fetchUserReviews = (userId) => (dispatch) => {
  return ReviewApiUtil.fetchUserReviews(userId)
    .then(
      result => dispatch(receiveUserReviews(result)),
      errors => dispatch(receiveErrors(errors.response.JSON))
      )
}

export const createReview = (businessId, review) => (dispatch) => {
  return reviewsAPIUtil.createReview(businessId, review)
  .then(
    review => (dispatch(receiveReview(review),
    errors => dispatch(receiveErrors(errors.reponse.JSON))
    )
  ))
}

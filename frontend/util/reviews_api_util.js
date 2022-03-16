export const fetchAllReviews = (businessId) => {
  return $.ajax({
    url: `api/businesses/${businessId}/reviews`,
    method: `GET`,
  })
}

export const fetchReview = (businessId, reviewId) => {
  return $.ajax({
    method: `GET`,
    url: `api/businesses/${businessId}/reviews/${reviewId}`
  })
}

export const createReview = (businessId, review) => {
  return $.ajax({
    url: `/api/businesses/${businessId}/reviews`,
    method: `POST`,
    data: {
        review: review,
        businessId: businessId
    }
  })
}

// export const deleteReview = (reviewId) => {
//   return $.ajax({
//     url: `api/reviews/${reviewId}`,
//     method: `DELETE`
//   })
// }

// export const createReview = (review) =>{
//   return $.ajax({ 
//   url: "/api/reviews", 
//   method: "POST", 
//   data: review,
//   })
// }
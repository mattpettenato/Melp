export const RECEIVE_ALL_BUSINESSES = "RECEIVE_ALL_BUSINESSES";
export const RECEIVE_BUSINESS = "RECEIVE_BUSINESS";
// export const CLEAR_BUSINESS = "CLEAR_BUSINESS";

import * as BusinessApiUtil from '../util/businesses_api_util'

export const receiveAllBusinesses = (businesses) => {
  return {
    type: RECEIVE_ALL_BUSINESSES,
    businesses
  }
}

export const receiveBusiness = (business) => {
  return {
    type: RECEIVE_BUSINESS,
    business
  }
}

// export const removeBusiness = () => ({
//   type: CLEAR_BUSINESS,
//   businessId
// });


// export const fetchBusiness = (businessId) => {
//   return (dispatch) => {
//     return BusinessApiUtil.fetchBusiness(businessId).then((response) => {
//       return dispatch(receiveBusiness(response));
//     });
//   };
// };
export const fetchBusinesses = () => dispatch => BusinessApiUtil.fetchBusinesses()
  .then(businesses => dispatch(receiveAllBusinesses(businesses)))

export const fetchBusiness = businessId => dispatch => BusinessApiUtil.fetchBusiness(businessId)
  .then(result => dispatch(receiveBusiness(result)))

// export const clearBusiness = (businessId) => dispatch => BusinessApiUtil.clearBusiness(businessId)
//   .then(business => dispatch(removeBusiness(businessId)))



// export const createBusiness = business => dispatch => BusinessApiUtil.createBusiness(business)
//   .then(business => dispatch(receiveBusiness(business)))

export const searchBusinesses = (search) => {
  return (dispatch) => {
    return BusinessApiUtil.searchBusinesses(search).then((businesses) => {
      return dispatch(receiveAllBusinesses(businesses));
    });
  };
};
export const RECEIVE_ALL_BUSINESSES = "RECEIVE_ALL_BUSINESSES";
export const RECEIVE_BUSINESS = "RECEIVE_BUSINESS";


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

export const fetchBusinesses = () => dispatch => BusinessApiUtil.fetchBusinesses()
  .then(businesses => dispatch(receiveAllBusinesses(businesses)))

export const fetchBusiness = businessId => dispatch => BusinessApiUtil.fetchBusiness(businessId)
  .then(businessId => dispatch(receiveBusiness(businessId)))

// export const searchBusinesses = (search) => {
//   return (dispatch) => {
//     return BusinessApiUtil.searchBusinesses(search).then((businesses) => {
//       return dispatch(receiveAllBusinesses(businesses));
//     });
//   };
// };
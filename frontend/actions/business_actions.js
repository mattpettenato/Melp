// import * as APIUtil from '../util/businesses_api_util';

// export const RECEIVE_ALL_BUSINESSES = 'RECEIVE_ALL_BUSINESSES';
// export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';


// export const fetchAllBusinesses = (category) => (dispatch) => {
//   return APIUtil.fetchAllBusinesses(category).then((businesses) => {
//     return dispatch(receiveAllBusinesses(businesses));
//   })
// }

// export const fetchBusiness = (businessId) => (dispatch) => {
//   return APIUtil.fetchBusiness(businessId).then((business) => {
//     return dispatch(receiveBusiness(business));
//   })
// }

// export const fetchBusinesses = () => (dispatch) => {
//   // return BusinessApiUtil.fetchBusinesses()
//   return APIUtil.fetchBusinesses()
//     .then(result => dispatch(receiveAllBusinesses(result)))
// }


// export const receiveAllBusinesses = (businesses) => {
//   return {
//     type: RECEIVE_ALL_BUSINESSES,
//     businesses
//   }
// }


// export const receiveBusiness = (business) => {
//   return {
//     type: RECEIVE_BUSINESS,
//     business
//   }
// }


export const RECEIVE_ALL_BUSINESSES = "RECEIVE_ALL_BUSINESSES";
export const RECEIVE_BUSINESS = "RECEIVE_BUSINESS";
export const CLEAR_BUSINESSES = "CLEAR_BUSINESSES";

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

export const clearBusinesses = () => ({
  type: CLEAR_BUSINESSES,
});

export const fetchBusinesses = (filters) => (dispatch) =>
  BusinessApiUtil.fetchBusinesses(filters).then((businesses) =>
    dispatch(receiveAllBusinesses(businesses))
  );

export const fetchBusiness = (businessId) => {
  return (dispatch) => {
    return BusinessApiUtil.fetchBusiness(businessId).then((response) => {
      return dispatch(receiveBusiness(response));
    });
  };
};

// export const fetchBusiness = (businessId) => (dispatch) => {
//   return BusinessApiUtil.fetchBusiness(businessId).then((business) => {
//     return dispatch(receiveBusiness(business));
//   })
// }

export const createBusiness = business => dispatch => BusinessApiUtil.createBusiness(business)
  .then(business => dispatch(receiveBusiness(business)))

export const searchBusinesses = (search) => {
  return (dispatch) => {
    return BusinessApiUtil.searchBusinesses(search).then((businesses) => {
      return dispatch(receiveAllBusinesses(businesses));
    });
  };
};
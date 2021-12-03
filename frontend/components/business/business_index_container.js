import { connect } from 'react-redux';
import { fetchBusinesses, fetchBusiness } from '../../actions/business_actions'
import BusinessIndex from './business_index'
import React from 'react';
import { withRouter } from "react-router-dom";


// const mSTP = (state) => {
//   const businesses = state.entities.businesses
//   return {
//     businesses
//   }
// }

const mSTP = state => {
  return {
    businesses: Object.values(state.entities.businesses)
  }
  // session: state.session.id
}

const mDTP = (dispatch) => {
  return {
    fetchBusinesses: () => dispatch(fetchBusinesses()),
    fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
  }
}

export default withRouter(connect(mSTP, mDTP)(BusinessIndex));


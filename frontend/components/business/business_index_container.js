import { connect } from 'react-redux';
import { fetchBusinesses, fetchBusiness } from '../../actions/business_actions'
import BusinessIndex from './business_index'
import { fetchAllReviews } from '../../actions/review_actions';
import React from 'react';
import { withRouter } from "react-router-dom";

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
    fetchAllReviews: (businessId) => dispatch(fetchAllReviews(businessId)),
  }
}

export default withRouter(connect(mSTP, mDTP)(BusinessIndex));


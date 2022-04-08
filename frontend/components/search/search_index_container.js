import { connect } from "react-redux";
import { fetchBusinesses, fetchBusiness } from "../../actions/business_actions";
import SearchIndex from './search_index'
import { fetchAllReviews } from "../../actions/review_actions";
// import React from "react";
// import { withRouter } from "react-router";

const mSTP = state => {
  return {
    businesses: Object.values(state.entities.businesses)
  }
  // session: state.session.id
}

const mDTP = (dispatch) => {
  return {
    // fetchBusinesses: () => dispatch(fetchBusinesses()),
    fetchBusinesses: (filter) => dispatch(fetchBusinesses(filter)),
    fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
    fetchAllReviews: (businessId) => dispatch(fetchAllReviews(businessId)),
  }
}

// export default withRouter(connect(mSTP, mDTP)(SearchIndex));
export default connect(mSTP, mDTP)(SearchIndex)

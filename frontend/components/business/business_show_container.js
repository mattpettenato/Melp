import { connect } from 'react-redux';
import BusinessShow from './business_show';
import { fetchBusiness, fetchBusinesses } from '../../actions/business_actions'
import { fetchReview, fetchAllReviews } from '../../actions/review_actions'


const mSTP = (state, ownProps) => {
  return {
    currentBusiness: state.entities.businesses[ownProps.match.params.businessId],
    reviews: state.entities.reviews,
    authors: state.entities.users
  }
};

const mDTP = (dispatch) => {
  return {
    // fetchBusinesses: () => dispatch(fetchBusinesses()),
    fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
    fetchAllReviews: (reviewId) => dispatch(fetchAllReviews(reviewId))

  }
};

export default connect(mSTP, mDTP)(BusinessShow);
import { connect } from 'react-redux';
import BusinessShow from './business_show';
import { fetchBusiness, fetchBusinesses } from '../../actions/business_actions'
// import { fetchReviews } from '../../actions/review_actions';

const mSTP = (state, ownProps) => {
  return {
    currentBusiness: state.entities.businesses[ownProps.match.params.businessId],
  }
};

const mDTP = (dispatch) => {
  return {
    // fetchBusinesses: () => dispatch(fetchBusinesses()),
    fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
    // fetchReviews: (businessId) => dispatch(fetchReviews(businessId))
  }
};

export default connect(mSTP, mDTP)(BusinessShow);
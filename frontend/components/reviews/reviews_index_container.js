import { connect } from 'react-redux';
import { fetchAllReviews } from '../../actions/review_actions';
import { fetchBusiness } from '../../actions/business_actions';
import ReviewIndex from '../../components/reviews/review_index';

const mSTP = (state, ownProps) => {

  return {
    // businesses: Object.values(state.entities.businesses),
    // reviews: Object.values(state.entities.reviews)
    users: state.entities.users
  }
};

const mDTP = (dispatch) => {
    return {
        fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
        // fetchUserReviews: (userId) => dispatch(fetchUserReviews(userId)),
        fetchAllReviews: (businessId) => dispatch(fetchAllReviews(businessId)),
        createReview: (businessId, review) => dispatch(createReview(businessId, review)),
        removeErrors: () => dispatch(removeErrors())
    }
};

export default connect(mSTP, mDTP)(ReviewIndex);
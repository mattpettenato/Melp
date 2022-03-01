import { connect } from 'react-redux';
import { fetchAllReviews } from '../../actions/review_actions';
import { fetchBusiness } from '../../actions/business_actions';
import ReviewIndex from '../reviews/review_index';

const mSTP = (state, ownProps) => {

  if(state.entities.reviews[ownProps.currentBusiness.id]) {
    return {
      reviews: Object.values(state.entities.reviews[ownProps.currentBusiness.id]),
      currentBusiness: ownProps.currentBusiness,
      // ratings: Object.values(state.entities.reviews).map(review => (review.rating)),
      businessId: ownProps.currentBusiness.id
    }
  } else {
    return {}
  }
}

const mDTP = (dispatch) => {
  return {
    fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
    fetchAllReviews: (businessId) => dispatch(fetchAllReviews(businessId)),
    createReview: (businessId, review) => dispatch(createReview(businessId, review)),
    removeErrors: () => dispatch(removeErrors())
  }
}

export default connect(mSTP, mDTP)(ReviewIndex);

import {connect} from "react-redux";
import { fetchBusiness } from '../../actions/business_actions';
import {createReview, clearReviewErrors, fetchAllReviews} from "../../actions/review_actions";
import { logout } from "../../actions/session_actions";
import ReviewForm from "../reviews/create_review_form";

const mSTP = (state, ownProps) => {
    const businessId = ownProps.match.params.businessId;
    return {
    business: state.entities.businesses[businessId],
    businessId: businessId,
    authorId: state.session.currentUser,
    errors: state.errors.reviewsErrors,
    // businessId: ownProps.match.params.businessId,
    currentBusiness: state.entities.businesses
    }
}

const mDTP = (dispatch) => {
  return {
    fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
    logout: () => dispatch(logout()),
    // fetchAllReviews: (businessId) => dispatch(fetchAllReviews(businessId)),
    createReview: (businessId, review) => dispatch(createReview(businessId, review)),
    removeErrors: () => dispatch(removeErrors())
  }
}

export default connect(mSTP, mDTP)(ReviewForm);


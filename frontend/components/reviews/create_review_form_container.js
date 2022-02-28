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
    // reviews: state.entities.reviews[ownProps.match.params.reviewId],
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.reviews,
    authorId: state.session.currentUser,
}}

const mDTP = (dispatch) => ({
    createReview: review => dispatch(createReview(review)),
    logout: () => dispatch(logout()),
    fetchBusiness: businessId => dispatch(fetchBusiness(businessId)),
    clearErrors: () => dispatch(clearReviewErrors()),
    fetchAllReviews: (businessId) => dispatch(fetchAllReviews(businessId)),
    fetchReview: (reviewId) => dispatch(fetchReview(reviewId)),
});

export default connect(mSTP, mDTP)(ReviewForm);
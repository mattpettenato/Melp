import {connect} from "react-redux";
import { fetchBusiness } from '../../actions/business_actions';
import {createReview, clearReviewErrors, fetchAllReviews} from "../../actions/review_actions";
import { logout } from "../../actions/session_actions";
import ReviewForm from "../reviews/create_review_form";

const mSTP = (state, ownProps) => {
    // const businessId = ownProps.match.params.businessId;
    return {
    // business: state.entities.businesses[businessId],
    // businessId: businessId,
    // // reviews: state.entities.reviews[ownProps.match.params.reviewId],
    // currentUser: state.entities.users[state.session.id],
    // errors: state.errors.reviews,
    // authorId: state.session.currentUser,
        authorId: state.session.currentUser,
        errors: state.errors.reviewsErrors,
        businessId: ownProps.match.params.businessId,
        currentBusiness: state.entities.businesses
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

// import { connect } from 'react-redux';
// import { createReview, fetchReview, fetchReviews } from '../../actions/review_actions'
// import { fetchBusiness } from '../../actions/business_actions'
// import { removeErrors } from '../../actions/review_actions'
// import ReviewForm from './create_review_component';

// import {connect} from "react-redux";
// import { fetchBusiness } from '../../actions/business_actions';
// import {createReview, clearReviewErrors, fetchAllReviews, fetchReview} from "../../actions/review_actions";
// // import { logout } from "../../actions/session_actions";
// import ReviewForm from "../reviews/create_review_form";

// const mSTP = (state, ownProps) => {
//     return {
//         authorId: state.session.currentUser,
//         errors: state.errors.reviewsErrors,
//         businessId: ownProps.match.params.businessId,
//         currentBusiness: state.entities.businesses
//     }
// };

// const mDTP = (dispatch) => {
//     return {
//         fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
//         fetchReview: (reviewId) => dispatch(fetchReview(reviewId)),
//         fetchAllReviews: (businessId) => dispatch(fetchAllReviews(businessId)),
//         createReview: (businessId, review) => dispatch(createReview(businessId, review)),
//         clearReviewErrors: () => dispatch(clearReviewErrors())
//     }
// };

// export default connect(mSTP, mDTP)(ReviewForm);
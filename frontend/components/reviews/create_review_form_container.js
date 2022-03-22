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
    currentBusiness: state.entities.businesses,
    // usersAll: state.session.users
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

// const mSTP = (state, ownProps) => {
//   console.log(ownProps)
//   return {
//     review: {
//     rating: '',
//     body: '',
//     name: '',
//     listingId: parseInt(ownProps.listingId),
//     guestId: state.session.id
//   },
//   currentUser: state.session.id
//   }
// }

// const mDTP = dispatch => ({
//   createReview: review => dispatch(createReview(review)),
//   removeErrors: () => dispatch(removeErrors()),
//   fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
//   // openModal: (e) => dispatch(openModal(e))
// })

// export default connect(mSTP, mDTP)(ReviewForm)


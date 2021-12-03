import { connect } from 'react-redux';
import Splash from './splash'
import { fetchBusiness } from '../../actions/business_actions';

const mSTP = (state) => {
  return {
    businesses: Object.values(state.entities.businesses)
  };
}

const mDTP = (dispatch) => {
  return {
    fetchBusiness: (businessId) => {
      return dispatch(fetchBusiness(businessId));
    }
  }
}

export default connect(mSTP, mDTP)(Splash);
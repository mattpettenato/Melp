import { connect } from 'react-redux';
import BusinessShow from './business_show';
import { fetchBusiness, fetchBusinesses } from '../../actions/business_actions'


const mSTP = (state, ownProps) => {
  return {
    currentBusiness: state.entities.businesses[ownProps.match.params.businessId],
  }
};

const mDTP = (dispatch) => {
  return {
    // fetchBusinesses: () => dispatch(fetchBusinesses()),
    fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId))
  }
};

export default connect(mSTP, mDTP)(BusinessShow);
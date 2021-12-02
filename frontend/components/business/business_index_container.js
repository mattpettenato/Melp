import { connect } from 'react-redux';
import { fetchBusinesses } from '../../actions/business_actions'
import BusinessIndex from './business_index'

const mSTP = (state) => {
  const businesses = state.entities.businesses
  return {
    businesses
  }

}

const mDTP = (dispatch) => {
  return {
    fetchBusinesses: (category) => {
      return dispatch(fetchBusinesses(category));
    }
  }
}

export default connect(mSTP, mDTP)(BusinessIndex);


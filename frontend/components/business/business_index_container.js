import { connect } from 'react-redux';
import { fetchBusinesses } from '../../actions/business_actions'
import BusinessIndex from './business_index'
import React from 'react';

// const mSTP = (state) => {
//   const businesses = state.entities.businesses
//   return {
//     businesses
//   }
// }

const mSTP = state => ({
  businesses: Object.values(state.entities.businesses),
  session: state.session.id
})

const mDTP = (dispatch) => {
  return {
    fetchBusinesses: () => {
      return dispatch(fetchBusinesses());
    }
  }
}

export default connect(mSTP, mDTP)(BusinessIndex);


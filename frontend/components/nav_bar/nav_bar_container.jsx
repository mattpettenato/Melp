// import React from 'react';
// import { connect } from 'react-redux';
// import NavBar from './nav_bar'
// import { logout } from "../../actions/session_actions"
// // import { openModal } from '../../actions/modal_actions';

// // const mapStateToProps = state => ({
// //   currentUser: state.entities.users[state.session.id]
// // })

// const mapStateToProps = ({ session, entities: { users } }) => {
//   return {
//     currentUser: users[session.id]
//   };
// };

// // const mapStateToProps = ({ session }) => ({
// //   currentUser: session.currentUser
// // });

// const mapDispatchToProps = dispatch => ({
//   logout: () => dispatch(logout())
//   // openModal: e => dispatch(openModal(e))
//   // closeModal: () => dispatch(closeModal())
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(NavBar);

import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './nav_bar';

const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.id]
    };
}

const mDTP = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(mSTP, mDTP)(NavBar);
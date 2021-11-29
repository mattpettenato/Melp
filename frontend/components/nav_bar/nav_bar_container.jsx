import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar'
import { logout } from "../../actions/session_actions"
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id]
})

// const mapStateToProps = ({ session }) => ({
//   currentUser: session.currentUser
// });

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: e => dispatch(openModal(e))
  // closeModal: () => dispatch(closeModal())

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);

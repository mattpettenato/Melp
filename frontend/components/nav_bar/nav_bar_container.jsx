import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar'
// import { openModal } from "../../actions/modal_actions"

// const mapStateToProps = null;
// const mapDispatchToProps = null;

import { logout } from "../../actions/session_actions"

const mapStateToProps = ({ entities, session }) => ({
  currentUser: entities.users[session.id]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
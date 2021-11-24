import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import Signup from './signup';
import { clearErrors } from '../../actions/errors_actions';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  formType: 'signup',
  navLink: <Link to="/login">Log In</Link>,
})

const mapDispatchToProps = dispatch => ({
  signupUser: user => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
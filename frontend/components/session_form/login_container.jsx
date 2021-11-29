import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login, clearErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import LogIn from './login';
// import { clearErrors } from '../../actions/errors_actions';



const mapStateToProps = ({ errors }) => ({
  errors: errors.session
})

// const mapStateToProps = ({ errors }) => {
//   return {
//     errors: errors.session,
//     formType: 'login',
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
    otherForm: (
      <button onClick={() => dispatch(openModal('signup'))}>
        Signup
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  };
};


// const mapDispatchToProps = dispatch => ({
//   loginUser: user => dispatch(login(user)),
//   clearErrors: () => dispatch(clearErrors()),
//   closeModal: () => dispatch(closeModal()),
//   otherForm: (
//     <div className="session-button" onClick={() => dispatch(openModal('signup'))}>
//       Signup
//     </div>
//   )
// })

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);

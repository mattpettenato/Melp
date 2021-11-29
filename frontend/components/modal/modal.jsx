import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import LoginContainer from "../session_form/login_container";
import SignupContainer from "../session_form/signup_container";

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null
  }

  let component;
  switch (modal) {
    case 'login':
      component = <LoginContainer />
      break;
    case 'signup':
      component = <SignupContainer />
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mSTP = state => ({
  modal: state.ui.modal
})

const mDTP = dispatch => ({
  closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(Modal)
import React from "react";
import NavBarContainer from '../nav_bar/nav_bar_container'
import { withRouter } from 'react-router-dom';



class Signup extends React.Component{
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      email: '',
      password: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillUnmount() {
    this.props.clearErrors()
  }

  // handleInput(type) {
  //   return (e) => {
  //     this.setState({ [type]: e.target.value })
  //   }
  // }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.processForm(this.state)
      .then(this.props.closeModal)
  }


  render () {
    return (
      <div className="session-form">
        <h2>Sign Up!</h2>
        <br />
        <NavBarContainer />

        <form> 
          <br />
          {/* {this.props.formType} or {this.props.otherForm} */}
          {/* <div onClick={this.props.closeModal} className="close-x"></div> */}
          {/* {this.renderErrors()} */}
          <br />
          <label>Username:
            <input
              type="text"
              value={this.state.username}
              onChange={this.update('username')}
            />
            <div className='modal-errors'>
              {this.props.errors ? this.props.errors.username : ''}
            </div>
          </label>
            <br />
          <label>Email:
            <input
              type="text"
              value={this.state.email}
              onChange={this.update('email')}
            />
            <div className='modal-errors'>
              {this.props.errors ? this.props.errors.email : ''}
            </div>
          </label>
          <br />
          <label>Password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
            />
            <div className='modal-errors'>
              {this.props.errors ? this.props.errors.password : ''}
            </div>
          </label>
          <br />
          <button onClick={this.handleSubmit}>Sign Up!</button>
          <br />
          <br />

        </form>
      </div>
    )
  }
}

export default withRouter(Signup);


// handleSubmit(e){
//   e.preventDefault()
//   this.props.signupUser(this.state)
//     .then(this.props.closeModal)
// }

// update(field){
//   return e => this.setState({ [field]: e.currentTarget.value })
// }

// componentWillUnmount() {
//   this.props.clearErrors()
// }

// // renderErrors() {
// //   return (
// //     <ul>
// //       {this.props.errors.map((error, i) => (
// //         <li key={i}>
// //           {error}
// //         </li>
// //       ))}
// //     </ul>
// //   )
// // }

// render(){

//   return (
//     <form onSubmit={this.handleSubmit} className="session-form">
//       <h2 className='modal-title'>Sign Up</h2>
//       <div className="modal-content">
//         <input className="modal-inputs"
//           type="text"
//           placeholder='Email'
//           value={this.state.email}
//           onChange={this.update('email')}
//         />
//         <div className='modal-errors'>
//           {this.props.errors ? this.props.errors.email : ''}
//         </div>
//         <br />
//         <input className="modal-inputs"
//           type="text"
//           placeholder='Username'
//           value={this.state.username}
//           onChange={this.update('username')}
//         />
//         <br />
//         <div className='modal-errors'>
//           {this.props.errors ? this.props.errors.username : ''}
//         </div>
//         <br />
//         <input className="modal-inputs"
//           type="password"
//           placeholder='Password'
//           value={this.state.password}
//           onChange={this.update('password')}
//         />
//         <div className='modal-errors'>
//           {this.props.errors ? this.props.errors.password : ''}
//         </div>
//         <br />
//         <button className="modal-submit">Create User</button>
//       </div>
//       <div className='modal-footer'>Sign up or
//         <button className='button'>{this.props.otherForm}</button>
//       </div>
//     </form>
//   )
// }
// }

// export default Signup
import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container'
import { Switch, Route, Link } from 'react-router-dom';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleInput(type) {
  //   return (e) => {
  //     this.setState({ [type]: e.target.value });
  //   };
  // }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   const user = Object.assign({}, this.state);
  //   this.props.processForm(user).then(this.props.closeModal);
  // }

  handleSubmit(e) {
    e.preventDefault()
    this.props.processForm(this.state)
      .then(this.props.closeModal);
  }

  componentWillUnmount() {
    this.props.clearErrors()
  }

  render() {
    return (
      <div className="session-form">
        <h2>Log In!</h2>
        <NavBarContainer />
        <form>
          <br />
          <label>Username:
            <input
              type="text"
              value={this.state.username}
              onChange={this.update('username')}
            />
          </label>
          <br />
          <br />
          <label>Password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
            />
            <div className='modal-errors'>
              {this.props.errors ? this.props.errors.invalid : ''}
            </div>
          </label>
          <br />
          <Link to="/">
            <button onClick={this.handleSubmit}>Log In!</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default Login;

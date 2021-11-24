import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.login(this.state)
      .then(this.props.closeModal);
  }

  // handleSubmitDemo(e) {
  //   e.preventDefault()

  //   const demoUser = {
  //     email: 'DemoUser',
  //     password: 'DemoUser'
  //   }

  //   this.props.login(demoUser)
  //     .then(this.props.closeModal())
  // }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  componentWillUnmount() {
    this.props.clearErrors()
  }

  render() {
    return (
      <div className="session-form">
        <h2>Log In!</h2>
        <form>
          <label>Username:
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleInput('username')}
            />
          </label>

          <label>Password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
            />
            <button onClick={this.handleSubmit}>Log In!</button>
          </label>
        </form>
      </div>
    );
  }
}

export default Login;

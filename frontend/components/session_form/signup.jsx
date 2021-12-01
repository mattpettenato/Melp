import React from "react";
import NavBarContainer from '../nav_bar/nav_bar_container'
import { withRouter } from 'react-router-dom';
import { Link } from "react-router-dom";


class Signup extends React.Component{
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      email: '',
      password: '',

      show: false

    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleBlur = this.handleBlur.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors()
  }

  handleBlur() {
    this.setState(
      { show: false }
    )
  }

  handleClick() {
    this.setState(
      { show: !this.state.show }
    )
  }



  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }


  render () {
    return (
      <div className="session-form">
  
        <div className="session-form-nav">

          <Link to="/">
            <img className="hero-img" src="https://s3-media0.fl.yelpcdn.com/assets/public/yelp_favicon.yji-5e8cc24f40ca89107dc7a349ed209e00.svg" />
          </Link>
        </div>
        <div className="session-form-container">
        <div className="session-form-box">

          <form onSubmit={this.handleSubmit} className="login-form-box">

        <p className="session-form-title">Sign Up for Melp</p>
        <p className="legal-copy">By continuing, you agree to Yelp’s 
        <a href="https://terms.yelp.com/tos/en_us/20200101_en_us/" > Terms of Service</a> and 
        <a href="https://terms.yelp.com/privacy/en_us/20200101_en_us/" > Privacy Policy.</a>
        </p>

        {this.renderErrors()}

          <div className="login-form">

          <label>
            <input
              type="text"
              value={this.state.username}
              onChange={this.update('username')}
              placeholder="Username"
              className="login-input"
            />
          </label>
          <label>
            <input
              type="text"
              value={this.state.email}
              onChange={this.update('email')}
              placeholder="Email"
              className="login-input"
            />
          </label>
          <label>
            <input
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder="Password"
              className="login-input"
            />
          </label>

          <label>
            <input
              type="text"
              placeholder="ZIP code"
              className="login-input"
            />
          </label>
          {/* <input className="submit" type="submit" value="Sign Up" /> */}
                <input className="submit" type="submit" value="Sign Up" />

          <p className="session-form-foot">Already on Melp? <Link to="/login" onClick={this.clearErrors}>Log In</Link></p>
          </div>
        </form>
      </div>
        <img className="signup-img" src="https://s3-media0.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png" />
      </div>
      </div>
    )
  }
}

export default Signup;

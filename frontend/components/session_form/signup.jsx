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
    if (this.props.errors) {

    }
  }


  render () {

    return (
      <div id="wrapper">
      <div className="session-form">
  
        <div className="session-form-nav">

          <Link to="/">
            <img className="hero-img" src="https://raw.githubusercontent.com/mattpettenato/FullStack_Project/main/melp_imgs/melp_logo.png" />
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

        {/* {this.renderErrors()} */}

          <div className="login-form">

          <label>
            <input
              type="username"
              value={this.state.username}
              onChange={this.update('username')}
              placeholder="Username"
              className="login-input"
            />
          </label>
          <div className="da-error">
            {this.props.errors ? this.props.errors.username : ''}
          </div>

          <label>
            <input
              type="email"
              value={this.state.email}
              onChange={this.update('email')}
              placeholder="Email"
              className="login-input"

            />
          </label>
          <div className="da-error">
            {this.props.errors ? this.props.errors.email : ''}
          </div>

          <label className="signup-pass">
            <input
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder="Password"
              className="login-input"
            />
          </label>
          <div className="da-error">
            {this.props.errors ? this.props.errors.password : ''}
          </div>

          <label>
            <input
              type="number"
              placeholder="ZIP code"
              className="login-input"
              min='00501'
              max='99999'
            />
          </label>
          {/* <input className="submit" type="submit" value="Sign Up" /> */}
                <input className="submit" type="submit" value="Sign Up" />

          {/* <p className="session-form-foot">Already on Melp? <Link to="/login" onClick={this.clearErrors}>Log In</Link></p> */}
          <p className="session-form-foot">Already on Melp? <Link to="/login" >Log In</Link></p>
          </div>
        </form>
      </div>
        <img className="signup-img" src="https://s3-media0.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png" />
      </div>
      </div>
      <div className="fix-footer">

          <footer className="footer">
            <div className="about-user">
              <p className="about-user-contact">Contact</p>
              <div className='gmail'><p>mtp855@gmail.com</p></div>
            </div>
            <div className="mylinks">
              <p className="about-user-title">About</p>
              <a href="https://www.linkedin.com/in/matthew-pettenato-936236123/" target="_blank">
                <img className="ln-img" src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg" />
              </a>

              <a href="https://github.com/mattpettenato" target="_blank">
                <img className="git-img" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png" />
              </a>

            </div>

          </footer>
      </div>
      </div>
    )
  }
}

export default Signup;

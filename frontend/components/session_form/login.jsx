import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container'
import { Switch, Route, Link, Redirect } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';


class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      show: false

    };

    this.demo = {
      username: 'demo',
      password: 'demopassword'
    }



    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    // this.renderErrors = this.renderErrors.bind(this);
    this.clearErrors = this.clearErrors.bind(this);

    this.nameEmpty = false;
    this.emailError = false;
    this.emailEmpty = false;
    this.passwordEmpty = false;
    this.zipCodeEmpty = false;
  }



  handleBlur(e) {
    e.preventDefault();

    this.setState({ state: this.state });
  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }



  clearErrors(e) {
    this.props.clearErrors()
  }



  handleSubmit(e) {
    e.preventDefault();
    this.props.clearErrors();

    this.props.processForm(this.state);
    this.setState({ state: this.state });
  }



  // renderErrors() {

  //           {this.props.errors ? this.props.errors : ''}

  // }

  handleClick() {
    this.setState(
      { show: !this.state.show }
    )
    return <Redirect to="/#" />
  }

  componentWillUnmount() {
    this.props.clearErrors()
  }

  render() {
    console.log(this.props.errors)
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
          <form onSubmit={this.handleSubmit}>
            <p className="session-form-title">Log In to Melp</p>
            <p className="session-form-title-2">New to Melp? <Link to="/signup" >Sign Up</Link></p>

            <p className="legal-copy">By logging in, you agree to Melp’s 
            <a href="https://terms.yelp.com/tos/en_us/20200101_en_us/" >Terms of    Service</a> and 
            <a href="https://terms.yelp.com/privacy/en_us/20200101_en_us/" > Privacy    Policy.</a>
            </p>
        
            {/* {this.renderErrors()} */}
            <div className="da-error">
            {this.props.errors ? this.props.errors.invalid : ''}
            </div>

                <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="login-input"
                  placeholder="Username"
                />

                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                  placeholder="Password"
                />

              <input className="submit" type="submit" value="Log In"/>

          </form>

            <button className="submit" onClick={() => this.props.processForm(this.demo)}>Demo Login</button>



              {/* <p className="session-form-foot">New to Melp? <Link to="/signup" onClick={this.clearErrors}>Sign Up</Link></p> */}
              <p className="session-form-foot">New to Melp? <Link to="/signup">Sign Up</Link></p>

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

      
      
    );
  }
}

export default Login;

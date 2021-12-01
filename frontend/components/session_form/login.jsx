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

    // this.handleBlur = this.handleBlur.bind(this);
    // this.handleClick = this.handleClick.bind(this);

    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.renderErrors = this.renderErrors.bind(this);
    // this.clearErrors = this.clearErrors.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.clearErrors = this.clearErrors.bind(this);

    this.nameEmpty = false;
    this.emailError = false;
    this.emailEmpty = false;
    this.passwordEmpty = false;
    this.zipCodeEmpty = false;
  }

  // handleBlur() {
  //   this.setState(
  //     { show: false }
  //   )
  // }

  handleBlur(e) {
    e.preventDefault();
    // this.nameEmpty = false;
    // this.emailError = false;
    // this.emailEmpty = false;
    // this.passwordEmpty = false;
    // this.zipCodeEmpty = false;
    this.setState({ state: this.state });
  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // handleSubmit(e) {
  //   this.props.clearErrors();
  //   e.preventDefault();
  //   const user = Object.assign({}, this.state);
  //   this.props.processForm(user)
  //   this.setState({
  //     password: ""
  //   })
  // }

  clearErrors(e) {
    this.props.clearErrors()
  }

  // handleSubmitDemo(e) {
  //   e.preventDefault()

  //   const demoUser = {
  //     username: 'demo',
  //     password: 'demopassword'
  //   }

  //   this.props.loginUser(demoUser)
  // }

  handleSubmit(e) {
    e.preventDefault();
    this.props.clearErrors();

    this.props.processForm(this.state);
    this.setState({ state: this.state });
  }

  // emailValid() {
  //   if (!this.state.email.includes("@") && this.state.email !== "") {
  //     return `Please include an '@' in the email address. ${this.state.email} is missing an '@'.`
  //   }
  // }

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
    return (
      <div id="wrapper">
      <div className="session-form">
        <div className="session-form-nav">
          <Link to="/">
            <img className="hero-img" src="https://s3-media0.fl.yelpcdn.com/assets/public/yelp_favicon.yji-5e8cc24f40ca89107dc7a349ed209e00.svg" />
          </Link>
        </div>
        <div className="session-form-container">
          <div className="session-form-box">
          <form onSubmit={this.handleSubmit}>
            <p className="session-form-title">Log In to Melp</p>
            <p className="session-form-title-2">New to Melp? <Link to="/signup" onClick={this.clearErrors}>Sign Up</Link></p>

            <p className="legal-copy">By logging in, you agree to Melp’s 
            <a href="https://terms.yelp.com/tos/en_us/20200101_en_us/" >Terms of    Service</a> and 
            <a href="https://terms.yelp.com/privacy/en_us/20200101_en_us/" > Privacy    Policy.</a>
            </p>
        
            {this.renderErrors()}

            {/* <div className="login-form"> */}
              {/* <label> */}
                <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="login-input"
                  placeholder="Email"
                />
              {/* </label> */}
              
              {/* <label> */}
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                  placeholder="Password"
                />
              {/* </label> */}
              

            {/* </div> */}

              <input className="submit" type="submit" value="Log In"/>

          </form>

            <button className="submit" onClick={() => this.props.processForm(this.demo)}>Demo Login</button>

            {/* <button onClick={this.demoLogin} className="submit">Demo Login</button> */}

              <p className="session-form-foot">New to Melp? <Link to="/signup" onClick={this.clearErrors}>Sign Up</Link></p>
          </div>
          <img className="signup-img" src="https://s3-media0.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png" />
        </div>
      <footer>
        <div className="footer">
          test footer
        </div>
      </footer>
      
      </div>
      </div>

      
      
    );
  }
}

export default Login;

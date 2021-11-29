import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import SignupContainer from './session_form/signup_container';
import LoginContainer from './session_form/login_container';
import Home from './home/home';
import { Switch, Route, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal'

const App = () => (
  <div>

    <Modal />

    <header>
      <Link to="/" className="header-link">
        <h1>Melp</h1>
        <div className="hero-img-frame">
          <img className="hero-img" src="https://s3-media0.fl.yelpcdn.com/assets/public/yelp_favicon.yji-5e8cc24f40ca89107dc7a349ed209e00.svg" />
        </div>
      </Link>
    </header>
    <br />
    <NavBarContainer />
    <br />
    <h1>Just Melpp It.</h1>


{/* 
    <Switch>
      
      <AuthRoute exact path="/login" component={LoginContainer} />
      <AuthRoute exact path="/signup" component={SignupContainer} />

    </Switch> */}
  </div>
);
export default App;

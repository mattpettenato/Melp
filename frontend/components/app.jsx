import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import SignupContainer from './session_form/signup_container';
import LoginContainer from './session_form/login_container';

import ReviewsIndexContainer from './reviews/reviews_index_container'
import UserShowContainer from './user/user_show_container';
import Home from './home/home';
import { Switch, Route, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './splash/splash_container';
import Search from './search/search_home';
import BusinessIndexContainer from "./business/business_index_container";
import BusinessShowContainer from "./business/business_show_container"


const App = () => (
  <div>
    <Switch>      
      <AuthRoute exact path="/login" component={LoginContainer} />
      <AuthRoute exact path="/signup" component={SignupContainer} />
      <Route exact path="/businesses/:businessId" component={BusinessShowContainer} />
      {/* <Route exact path="/businesses" component={BusinessIndexContainer} /> */}
      <Route path="/" component={Splash} />
    </Switch>
  </div>
);
export default App;

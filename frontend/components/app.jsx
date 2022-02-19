import React from 'react';

import SignupContainer from './session_form/signup_container';
import LoginContainer from './session_form/login_container';


import { Switch, Route, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './splash/splash_container';

import BusinessIndexContainer from "./business/business_index_container";
import BusinessShowContainer from "./business/business_show_container"

import CreateReviewFormContainer from './reviews/create_review_form_container';


const App = () => (
  <div>
    <Switch>      
      <AuthRoute exact path="/login" component={LoginContainer} />
      <AuthRoute exact path="/signup" component={SignupContainer} />
      <ProtectedRoute exact path="/businesses/:businessId/reviews/new" component={CreateReviewFormContainer} />
      <Route exact path="/businesses/:businessId" component={BusinessShowContainer} />
      {/* <Route exact path="/businesses" component={BusinessIndexContainer} /> */}
      <Route path="/" component={Splash} />
    </Switch>
  </div>
);
export default App;

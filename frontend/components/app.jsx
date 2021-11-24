// import React from 'react';
// // import WelcomeBar from './nav_bar/welcome_bar_container';
// import NavBarContainer from './nav_bar/nav_bar_container';
// import SignupContainer from './session/signup_container';
// import LoginContainer from './session/login_container';
// import Home from './home/home';
// // import { Route } from 'react-router-dom';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';

// import {
//   Route,
//   Redirect,
//   Routes,
//   Link,
//   HashRouter
// } from 'react-router-dom';
// // import { AuthRoute, ProtectedRoute } from '../utils/route_util';


// const App = () => (
//   <div>
//     {/* <NavBarContainer /> */}
//     <Routes>
//       {/* <Route path="/" element={NavBarContainer} /> */}
//       {/* <Route exact path="/" element={Home} /> */}
//       {/* <Route path="/signup" element={SignupContainer} /> */}
//       {/* <Route path="/login" element={LoginContainer} /> */}
//       {/* <Route path='/' element={NavBarContainer} /> */}
//       {/* <Route exact path='/' element={Home} /> */}
//       {/* <Route path='/signup' element={props => <SignupContainer {...props} />} /> */}
//       <Route path="/" component={NavBarContainer} />
//       <Route exact path="/" component={Home} />
//       <AuthRoute path="/signup" component={SignupContainer} />
//       <AuthRoute path="/login" component={LoginContainer} />
//     </Routes>
//   </div>
// );

// export default App;
import React from 'react';
// import WelcomeBar from './nav_bar/welcome_bar_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
// import ChirpIndexContainer from './chirps/chirp_index_container';
import Home from './home/home';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

export default () => (
  <div>
    <Route path="/" component={NavBarContainer} />
    <Route exact path="/" component={Home} />
    <AuthRoute path="/signup" component={SignupContainer} />
    <AuthRoute path="/login" component={LoginContainer} />
    {/* <ProtectedRoute path="/chirps" component={ChirpIndexContainer} /> */}
  </div>
);
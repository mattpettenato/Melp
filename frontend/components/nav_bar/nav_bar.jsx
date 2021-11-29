// import React from 'react';
// import { Link } from 'react-router-dom';

// const NavBar = ({ currentUser, logout, openModal }) => {
//   const display = currentUser ? (
//     <div>
//       <h3>Welcome {currentUser.username}!</h3>
//       <button className="header-button" onClick={logout}>Log Out</button>
//     </div>
//   ) : (
//     <div>
//       <nav className="login-signup">
//         <button onClick={() => openModal('login')}>Login</button>
//         &nbsp;or&nbsp;
//         <button onClick={() => openModal('signup')}>Signup</button>
//       </nav>
//     </div>
//   );
//   return (
//     <header className="nav-bar">
//       {/* <Link to="/" className="header-link">
//         <h1 className="logo">Melppp</h1>
//       </Link> */}
//       <div>
//         {display}
//       </div>
//     </header>
//   )
// }

// export default NavBar;


import React from 'react';

const NavBar = ({ currentUser, logout, openModal }) => {

  const sessionLinks = () => (
    <nav className="login-signup">
      <button onClick={() => openModal('login')}>Login</button>
      &nbsp;or&nbsp;
      <button onClick={() => openModal('signup')}>Signup</button>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Welcome, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return (
    currentUser ?
      personalGreeting(currentUser, logout) :
      sessionLinks()
  );
};

export default NavBar;

// import React from 'react';

// const Greeting = ({ currentUser, logout, openModal }) => {

//   const sessionLinks = () => (
//     <nav className="login-signup">
//       <button onClick={() => openModal('login')}>Login</button>
//       &nbsp;or&nbsp;
//       <button onClick={() => openModal('signup')}>Signup</button>
//     </nav>
//   );
//   const personalGreeting = () => (
//     <nav className="logout-btn">
//       <h2 className="header-name">Welcome, {currentUser.username}!</h2>
//       <button className="header-button" onClick={logout}>Log Out!!!!</button>
//     </nav>

//   );

//   return (
//     currentUser ?
//       personalGreeting(currentUser, logout) :
//       sessionLinks()
//   );
// };

// export default Greeting;

// import React from "react";
// import { Link } from "react-router-dom";

// class Navbar extends React.Component {
//   constructor(props) {
//     super(props)
//     // console.log(this.props)
//   }

//   render() {
//     if (!this.props.currentUser) {
//       return (
//       <nav className="login-signup">
//         <button onClick={() => this.props.openModal('login')}>Login</button>
//         &nbsp;or&nbsp;
//         <button onClick={() => this.props.openModal('signup')}>Signup</button>
//       </nav>
//       )
//     } else {
//       return (
//         <nav className="logout-btn">
//           <h2 className="header-name">Welcome, {this.props.currentUser.username}!</h2>
//           <button className="header-button" onClick={() => this.props.logout()}>Logout!!!</button>
//     </nav>
//       )
//     }
//   }
// }

// export default Navbar

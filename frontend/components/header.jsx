import React from 'react'
// import SearchBarShow from './search_bar_show'
import { Link } from "react-router-dom"


const Header = ({ currentUser, signOut, businessId }) => {
  const display = currentUser ? (
    <div className="session_buttons-search">
      <div className="log-out">
        <Link to="/" className="header-link-review"> Write a Review </Link>
        <button className="header-button-search" onClick={signOut}>Log out</button>
      </div>
      <Link to={`/users/${currentUser.id}`} className="user-profile-link">
        <div className="profile-picture-1">
        </div>
      </Link>
    </div>
  ) : (
    <div className="session_buttons-search">
      <Link to="/" className="header-link-review"> Write a Review </Link>
      <Link to={`/signin?id=${businessId}`}>
        <button className="header-link-search">Log In</button>
      </Link>
      <Link to="/signup">
        <button className="header-button-search">Sign Up</button>
      </Link>
    </div>
  );

  // console.log(currentUser)
  return (
    <div className="header-container">
      <div className="header-container-child" id="logo-id">
        <Link to="/" >
          <img className="header-logo" src={window.logoURL} />
        </Link>
      </div>
      <div className="header-search-bar header-container-child">
        {/* <SearchBarShow id="show-search-bar-component" /> */}
      </div>
      <div className="display-div header-container-child">
        {display}
      </div>
    </div>
  )
}



export default Header;
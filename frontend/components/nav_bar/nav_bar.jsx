import React from 'react';
import { Link } from 'react-router-dom';
// import SearchBox from '../search_box/nav_search_box_container'

class NavBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      show: false
    }
    this.handleBlur = this.handleBlur.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  render() {
    return this.props.currentUser ? (
      <div className="nav-logged-in">
        <ul className="nav-list">



          
          <div className="nav-links">
              <li></li>
              <Link to="/" onClick={this.props.logout}>Log Out</Link>
          </div>

        </ul>

      </div>
    ) :
      (
        <div className="nav-logged-out">
          <ul className="nav-logged-out-list">


            <li>
              <div className="nav-links">
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign up</Link>
              </div>
            </li>
          </ul>
        </div>
      )
  }
}

export default NavBar;



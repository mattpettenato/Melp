import React from 'react'

class SearchNav extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="homesearchnav">
        <form>
          <label id="findmenav">Find</label>
          <div id="leftDivnav">
            <input className="findsearchtext" type="text" placeholder="nail salons, plumbers, takeout..." />
          </div>
          <label id="findme">Near</label>
          <div id="rightDiv">
            <input className="findneartext" type="text" placeholder="San Francisco" />
          </div>
          <span id="search-submit">
            <button className="search-btn" >
              <i className="fas fa-search"></i>
            </button>
          </span>
        </form>
      </div>
    )
  }
}

export default SearchNav;
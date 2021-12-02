import React from 'react'

class Search extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    return (
      <div className="homesearch">
        <form>
            <label id="findme">Find</label>
          <div id="leftDiv">
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

export default Search;
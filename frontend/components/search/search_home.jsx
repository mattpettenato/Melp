import React from 'react'

class Search extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    return (
      // <div className="homesearch">

      //   <form action="/" method="get">
      //     <label htmlFor="header-search">Find
      //       <span className="visually-hidden"></span>
      //     </label>
      //     <input
      //       type="text"
      //       id="header-search"
      //       placeholder="Search PLACEHOLDER"
      //       name="s"
      //     />
      //     <button type="submit">Search</button>
      //   </form>
      // </div>
      // <div>
      //   <div className="field has-addons">
      //     <p className="control">
      //       <button className="button is-static">Search</button>
      //     </p>
      //     <p className="control">
      //       <input className="input" type="text" placeholder="nail salons, plumbers, takeout..."/>
      //     </p>

      //     <p className="control">
      //       <button className="button is-static">Near</button>
      //     </p>
      //     <p className="control">
      //       <input className="input" type="text" placeholder="San Francisco" />
      //     </p>
      //   </div>
      // </div>

      <div className="homesearch">
        {/* <form className="splashsearch">
        <div className="findsearch">
          <label>Find</label>
        </div>
        <div className="findsearchtext">
          <input className="findsearchtext" type="text" placeholder="nail salons, plumbers, takeout..." />
        </div>
        <div className="findnear">
            <label>Near</label>
        </div>
        <div className="findneartext">
          <input className="findneartext" type="text" placeholder="San Francisco" />
        </div>
        <div classname="searchsubmit">
          <button >Search</button>
        </div>
        </form> */}

        <form>
          {/* <div id="findme"> */}
            <label id="findme">Find</label>
          {/* </div> */}
          <div id="leftDiv">
            <input className="findsearchtext" type="text" placeholder="nail salons, plumbers, takeout..." />
          </div>
          {/* <div id="findme"> */}
            <label id="findme">Near</label>
          {/* </div> */}
          <div id="rightDiv">
            <input className="findneartext" type="text" placeholder="San Francisco" />
          </div>
          <div id="search-submit">
            <button >Search</button>
          </div>

        </form>

      </div>


    )
  }
}

export default Search;
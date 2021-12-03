// import React from 'react';
import { Link } from 'react-router-dom';
// import LargeGoogleMap from './largeGoogleMap'
import NavBarContainer from '../nav_bar/nav_bar_container';
import SearchHome from '../search/search_home'
// import BusinessSearchShow from './business_search_show_container'
import BusinessIndexItem from './business_index_item';
import React, { useEffect, useRef } from 'react';

class BusinessIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (this.props.match.params.query === undefined) {
      // this.props.fetchBusinesses()
    } else {
      // this.props.getSearchBusinesses(this.props.match.params.query)
      // console.log('test')
    }
 
  }

componentWillUnmount(){
  if (this.props.match.params.query === undefined) {
    this.props.fetchBusinesses()
  } else {
    this.props.getSearchBusinesses(this.props.match.params.query)
  }
}


  render() {

    const bis=[]
    Object.keys(this.props.businesses || []).map((business) => bis.push(parseInt(business)))
    // console.log(this.props.businesses)
    const items = this.props.businesses.map((item) =>
      <div className="bis-splash-container" key={item.id}>
        <div className="bis-splash" key={item.id}>
        <Link className="bis-link1" key={item.id} to={`/businesses/${item.id}`}>
          <img src={`https://github.com/mattpettenato/FullStack_Project/blob/main/melp_imgs/home/${item.id}/${item.id}.jpg?raw=true`}/>
          
          <div key={item.id}>
            <p className="bis-name">{item.name}</p>
              {/* <p className="bis-rating">{item.rating}</p> */}
              <p className="bis-rating"><img src="https://raw.githubusercontent.com/mattpettenato/git_test/main/large/large_5.png"/></p>
            <p className="bis-phone">{item.about}</p>

              <p className="bis-address">{item.address}</p>


          </div>
        </Link>
        
        </div>
      </div>
    );



    if (!this.props.fetchBusinesses) {
      return null;
    } else {
    return (
      <div className="bus-index-main">
          <div className="plswork123" >
          {items}        
        </div>
      </div>
    )
  }
  }
}


export default BusinessIndex;
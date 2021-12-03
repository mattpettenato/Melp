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
      console.log('poop')
    }
    // this.props.fetchBusinesses()
  }

componentWillUnmount(){
  if (this.props.match.params.query === undefined) {
    this.props.fetchBusinesses()
  } else {
    this.props.getSearchBusinesses(this.props.match.params.query)
  }
  // this.props.fetchBusinesses()
}

  // UNSAFE_componentWillMount() {
  //   console.log('First this called');
  // }

  

  render() {
    // const { business } = this.props.business
    // console.log(this.props.fetchBusinesses(this.props.match.params.businessId))

    // const useDidMountEffect = (func, deps) => {
    //   const didMount = useRef(false);

    //   useEffect(() => {
    //     if (didMount.current) func();
    //     else didMount.current = true;
    //   }, deps);
    // }
    const bis=[]
    Object.keys(this.props.businesses || []).map((business) => bis.push(parseInt(business)))
    // console.log(bis)
    // console.log(this.props.businesses)
    console.log(this.props.businesses)
    const items = this.props.businesses.map((item) =>
      <div className="bis-splash" key={item.id}>
        <Link key={item.id} to={`/businesses/${item.id}`}>
          <img src={`melp_imgs/home/${item.id}/${item.id}`}/>
          /Users/matthewpettenato/Documents/GitHub/FullStack_Project/melp_imgs/home/1/1.jpg
        <div key={item.id}>{item.name} {item.rating} {item.phone}</div>

        </Link>
      </div>
    );
    // console.log(this.props)


    if (!this.props.fetchBusinesses) {
      return null;
    } else {
    return (
      <div className="bus-index-main">
        {/* <div className="plswork123" key={business.id}> */}
          <div className="plswork123" >
          {/* {Object.keys(this.props.businesses || [])} */}
          {/* {
            Object.keys(this.props.businesses || {}).map((business) => (<BusinessIndexItem business={business}
              fetchBusiness={this.props.fetchBusiness}/>))
          } */}
          {/* {bis} */}
          {items}
          
        </div>


      </div>
    )
  }

  }
}


export default BusinessIndex;
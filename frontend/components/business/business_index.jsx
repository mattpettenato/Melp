import React from 'react';
import { Link } from 'react-router-dom';
// import LargeGoogleMap from './largeGoogleMap'
import NavBarContainer from '../nav_bar/nav_bar_container';
import SearchHome from '../search/search_home'
// import BusinessSearchShow from './business_search_show_container'
import BusinessIndexItem from './business_index_item';

class BusinessIndex extends React.Component {
  constructor(props) {
    super(props)
  }

componentWillUnmount(){

}

  // componentWillMount() {
  //   console.log('First this called');
  // }

  render() {
    // const { business } = this.props.business
    // console.log(this.props.fetchBusinesses(this.props.match.params.businessId))
    return (
      <div className="bus-index-main">
        <div className="business-page-nav">
          <Link to="/">
            <img className="hero-img-bus-nav" src="https://s3-media0.fl.yelpcdn.com/assets/public/yelp_favicon.yji-5e8cc24f40ca89107dc7a349ed209e00.svg" />
          </Link>
          <SearchHome id="search-home-bus" />
          <div className="busnav">
            <NavBarContainer />
          </div>
        </div>

        <div className="bus-menu-options">
          <Link to="/businesses">
            <i className="fas fa-utensils fa-lg">  Restaurants</i>
          </Link>
        </div>

        <div>
          {this.props.businesses.length !== 0 ? (
            <div>
              {/* {console.log(this.props.businesses)} */}
              
              &nbsp;Stays in the area&nbsp;
              {this.props.businesses.length}
            </div>

          ) : <div>
              {console.log(this.props)}

            {this.props.businesses.length}
            &nbsp;Business Found
            </div>
          }
        </div>

        <div className="index-list-bus">
          {/* <BusinessIndexItem /> */}
        </div>

      </div>
    )
  }

  }


export default BusinessIndex;
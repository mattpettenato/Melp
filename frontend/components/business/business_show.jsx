
import React from "react";
// import BusinessNavContainer from "../business_nav/business_nav_container";
import NavBar from "../nav_bar/nav_bar";
import NavBarContainer from '../../components/nav_bar/nav_bar_container';

import SearchHome from "../search/search_home"
import { Link } from "react-router-dom";
import BusinessMap from "../maps/bus_map"

// import ReviewIndexContainer from "../reviews/review_index_container";

class BusinessShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasReview: false,
      businessId: this.props.businessId
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchBusiness(this.props.match.params.businessId);
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.match.params.businessId !== this.props.match.params.businessId
    ) {
      this.props.fetchBusiness(this.props.match.params.businessId);
    }
  }

  render() {
    const { business } = this.props;

    if (this.props.currentBusiness !== undefined) {
      
      // console.log(this.props.match.params.businessId)
      const curBus = this.props.currentBusiness
      // console.log(business.name)
    } else {
      // console.log(this.props)
    }

    if (!this.props.currentBusiness) {
      return null;
    }

    let bisName;
    if (this.props.currentBusiness) {
      bisName = this.props.currentBusiness.name
    }

    let bisAbout;
    if (this.props.currentBusiness) {
      bisAbout = this.props.currentBusiness.about
    }

    let bisRating;
    if (this.props.currentBusiness) {
      bisRating = this.props.currentBusiness.rating
    }

    let bisPhone;
    if (this.props.currentBusiness) {
      bisPhone = this.props.currentBusiness.phone
    }

    let bisAddress;
    if (this.props.currentBusiness) {
      bisAddress = this.props.currentBusiness.address
    }

    let bisHours;
    if (this.props.currentBusiness) {
      bisHours = this.props.currentBusiness.hours
    }


    return (
      <div>
        <div className="business-page-nav">
          <Link to="/">
            <img className="hero-img-bus-nav" src="https://s3-media0.fl.yelpcdn.com/assets/public/yelp_favicon.yji-5e8cc24f40ca89107dc7a349ed209e00.svg" />
          </Link>
          <SearchHome id="search-home-bus"/>
          <div className="busnav">
            <NavBarContainer/>
          </div>
        </div>
        {/* <div className="bus-menu-options">
          <Link to="/businesses"> 
            need to change link to index page
            <i className="fas fa-utensils fa-lg">  Restaurants</i>
          </Link>
        </div> */}
        {/* <div className="bus-imgs">
          <img src="<%= url_for(@business.photos) %>"/>
        </div> */}
        {/* <div className="pictures-array">
          {this.props.currentBusiness.photoUrls.map((p, i) => (
            <div className="picture-holder" key={i}>
              <img className="show-picture" src={p} />
            </div>
          ))}
        </div> */}
        <div className="bus-head">
          <div className="bus-imgs">
            <img src="https://i.imgur.com/jcjx5TK.jpeg" height="424" />
            <img src="https://i.imgur.com/BqiB8yM.jpeg" height="424" />
            <img src="https://i.imgur.com/4Bo62Nq.jpeg" height="424" />
            <img src="https://i.imgur.com/fLEaIv1.jpeg" height="424" />

          </div>
          {/* <ul>PHOTOS HERE</ul> */}
        </div>
        <div className="bus-info-body">
        <div className="bus-info-1">
          <ul className="business-title">
            {bisName}
          </ul>
          <ul className="business-rating">
            {bisRating}
            (need to calculate rating based off average rating of all reviews)
          </ul>
          <ul className="business-about">
            {bisAbout}
          </ul>
          <ul className="business-phone">
            {bisPhone}
          </ul>
          <ul className="business-hours">
            {bisHours}
          </ul>
        </div>
        <div className="bus-map-1">
          <BusinessMap />
          <ul className="business-address">
            {bisAddress}
          </ul>
        </div>
        </div>
        <div className="bus-reviews-1">
          <h3>reviewwwwww</h3>
        </div>
      </div>
    )
  }
}

export default BusinessShow;
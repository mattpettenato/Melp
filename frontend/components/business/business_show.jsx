
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

    console.log(this.props)



    return (
      <div>
        <div className="business-page-nav">
          <Link to="/">
            <img className="hero-img-bus-nav" src="https://raw.githubusercontent.com/mattpettenato/FullStack_Project/main/melp_imgs/melp_logo.png" />
          </Link>
          <SearchHome id="search-home-bus"/>
          <div className="busnav">
            <NavBarContainer/>
          </div>
        </div>

        <div className="bus-head">
          <div className="bus-imgs">
            {/* <img src="" height="424" /> */}
            <img src={`https://raw.githubusercontent.com/mattpettenato/FullStack_Project/main/melp_imgs/home/${this.props.currentBusiness.id}/1.jpg`} height="424" />
            <img src={`https://raw.githubusercontent.com/mattpettenato/FullStack_Project/main/melp_imgs/home/${this.props.currentBusiness.id}/2.jpg`} height="424" />
            <img src={`https://raw.githubusercontent.com/mattpettenato/FullStack_Project/main/melp_imgs/home/${this.props.currentBusiness.id}/3.jpg`} height="424" />
            <img src={`https://raw.githubusercontent.com/mattpettenato/FullStack_Project/main/melp_imgs/home/${this.props.currentBusiness.id}/4.jpg`} height="424" />

            {/* <div className="business-title">
            {bisName}
          {/* </div> */}
          {/* 
          <div className="business-rating">
            {/* {bisRating} 
              <p className="bis-rating"><img src="https://raw.githubusercontent.com/mattpettenato/git_test/main/large/large_5.png" />
              </p>

          </div>
          <div className="business-about">
            {bisAbout}
          </div>
*/}
        {/* </div> */}



          </div>


          
          {/* <div className="bus-info-1"> */}


          <div className="bus1-about-box">
            <div className="bus-names">
              {bisName}
            </div>

            <div className="business-rating">
              <p className="bis-rating"><img src="https://raw.githubusercontent.com/mattpettenato/git_test/main/large/large_5.png" />
              </p>
            </div>

          <div className="business-about">
            {bisAbout}
          </div>
          </div>
        </div>

        <div className="center-div">
        <div className="above-review">

          <div className="write-review">
            <button className="write-review-button">
              <i className="far fa-star"></i>
              &nbsp;&nbsp;Write a Review
            </button>
          </div>
          
        </div>
        
          <hr id="review-line"/>

        <div className="map-left">
          <h2>Location & Hours</h2>
            <BusinessMap />

        </div>
          <hr id="review-line"/>

        <div className="bus-info-body">
        <div className="bus-reviews-1">
          <div className="review-warning">
            <h1 className="recoreview">Recommended Reviews</h1>
            <div className="warning">
              <img className="hero-img-bus-nav" src="https://raw.githubusercontent.com/mattpettenato/FullStack_Project/main/melp_imgs/melp_logo.png" />

              <h2>Your trust is our top concern, so businesses can't pay to alter or remove their reviews</h2>
            </div>
          </div>
        </div>
        
          <div className="bus-map-1">
            {/* <BusinessMap /> */}
            <div className="map-under">
              <span id="busdir">
                <button className="busdirbut" >
                  <i className="fas fa-directions"></i>
                  &nbsp;&nbsp;{bisAddress}
                </button>
              </span>
              <span id="busdir">
                <button className="busdirbut" >
                  <i className="fas fa-clock"></i>
                    &nbsp;&nbsp;{bisHours}
                </button>
              </span>
              <span id="busdir">
                <button className="busdirbut" >
                  <i className="fas fa-phone"></i>
                  &nbsp;&nbsp;{bisPhone}
                </button>
              </span>
            </div>
          </div>
        </div>
        </div>
          <div>
        <footer className="footer">
          <div className="about-user">
            <p className="about-user-contact">Contact</p>
            <div className='gmail'><p>mtp855@gmail.com</p></div>
          </div>
          <div className="mylinks">
            <p className="about-user-title">About</p>
            <a href="https://www.linkedin.com/in/matthew-pettenato-936236123/" target="_blank">
              <img className="ln-img" src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg" />
            </a>

            <a href="https://github.com/mattpettenato" target="_blank">
              <img className="git-img" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png" />
            </a>

          </div>

        </footer>
      </div>
      </div>
    )
  }
}

export default BusinessShow;
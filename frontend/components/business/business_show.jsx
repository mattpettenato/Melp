
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

    // // const mathMe {
    //   for (var x = 0; x < 10; x++) {
    //   for (var y = 0; y < 10; y++) {
    //     console.log("x: " + x + ", y: " + y);
    //   }
    // }
    // // }

    // const mth =       for (var x = 0; x < 10; x++) {
    //   for (var y = 0; y < 10; y++) {
    //     console.log("x: " + x + ", y: " + y);
    //   }
    // }

    // const maths = this.props.businesses.map((item) =>
    //   <div className="bis-splash-container" key={item.id}>
    //     <div className="bis-splash" key={item.id}>
    //       <Link className="bis-link1" key={item.id} to={`/businesses/${item.id}`}>
    //         <img src={`https://github.com/mattpettenato/FullStack_Project/blob/main/melp_imgs/home/${item.id}/${item.id}.jpg?raw=true`} />

    //         <div key={item.id}>
    //           <p className="bis-name">{item.name}</p>
    //           {/* <p className="bis-rating">{item.rating}</p> */}
    //           <p className="bis-rating"><img src="https://raw.githubusercontent.com/mattpettenato/git_test/main/large/large_5.png" /></p>
    //           <p className="bis-phone">{item.about}</p>

    //           <p className="bis-address">{item.address}</p>


    //         </div>
    //       </Link>

    //     </div>
    //   </div>
    // );

    // console.log(this.props.currentBusiness.id)



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



        <div className="bus-info-body">
          <div className="location-hours">
            <h1>Location & Hours</h1>
          </div>
          <div className="bus-map-1">
            <BusinessMap />
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
        <div className="bus-reviews-1">
          <div className="review-warning">

            <div className="warning">
              {/* <img className="hero-img-bus-nav" src="https://raw.githubusercontent.com/mattpettenato/FullStack_Project/main/melp_imgs/melp_logo.png" /> */}
              <h2>Your trust is our top concern, so businesses can't pay to alter or remove their reviews</h2>
            </div>
          </div>
          <h3>reviewwwwwws :(</h3>

        </div>
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
      // </div>
    )
  }
}

export default BusinessShow;
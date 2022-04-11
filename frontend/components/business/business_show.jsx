
import React from "react";
// import BusinessNavContainer from "../business_nav/business_nav_container";
import NavBar from "../nav_bar/nav_bar";
import NavBarContainer from '../../components/nav_bar/nav_bar_container';

import SearchHome from "../search/search_home"
import { Link } from "react-router-dom";
import BusinessMap from "../maps/bus_map"
import ReviewIndexContainer from "../reviews/reviews_index_container";
import ReviewIndex from "../reviews/review_index";

class BusinessShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBusiness(this.props.match.params.businessId);
    // window.location.reload();

  }


  render() {
    // console.log(this.props)
    if (this.props.currentBusiness){
      const authors = this.props.authors;
      // console.log(authors)
    }

    if (!this.props.currentBusiness) return null;
    let orderedReview = []
    for (let i = this.props.reviews.length -1; i >= 0 && orderedReview.length < 8; i--){
      orderedReview.push(this.props.reviews[i])
    }
    let oneReview = orderedReview
    let reviewBox1 = oneReview.map((review, idx) => {
      return (
        <ReviewIndex className="rev-box-1" key={idx} deleteReview={this.props.removeReview} currentUser={this.props.currentUser} review={review} allUsers={this.props.allUsers} />
      )
    })

    if (!this.props.currentBusiness){
      return <div></div>
    }
    if (this.props.currentBusiness !== undefined) {
      const curBus1 = this.props.currentBusiness
      const busRevs = this.props.reviews
    }

    const { business } = this.props;

    if (this.props.currentBusiness !== undefined) {
      const curBus = this.props.currentBusiness
    } else {
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

    let bisWebsite;
    if (this.props.currentBusiness) {
      bisWebsite = this.props.currentBusiness.websiteurl
    }

    
    let avgRatingSum = 0;
    for (let i = this.props.reviews.length -1; i >= 0; i--){
      avgRatingSum += this.props.reviews[i].rating
      // console.log(avgRatingSum)
    }
    let avgRatingRounded = Math.floor(avgRatingSum / this.props.reviews.length)

    // console.log(avgRatingRounded) // avg = sum/total
    // console.log(this.props.currentBusiness.photos[0])
  let starRatingBus
  if (Math.floor(this.props.currentBusiness.average_rating) === 1){
    starRatingBus =
      <div className="stars-div">
        <span className="fa-stack fa-xs icon-star">
          <i className="fa fa-square fa-stack-2x"></i>
          <i className="fas fa-star fa-stack-1x"></i>
        </span>
      </div>
  }
  if (avgRatingRounded === 2){
    starRatingBus = 
      <div className="stars-div">
        <span className="fa-stack fa-xs icon-star">
          <i className="fa fa-square fa-stack-2x"></i>
          <i className="fas fa-star fa-stack-1x"></i>
        </span>
        <span className="fa-stack fa-xs icon-star">
          <i className="fa fa-square fa-stack-2x"></i>
          <i className="fas fa-star fa-stack-1x"></i>
        </span>
      </div>

  }
  if (avgRatingRounded === 3){
    starRatingBus = 
      <div className="stars-div">
        <span className="fa-stack fa-xs icon-star">
          <i className="fa fa-square fa-stack-2x"></i>
          <i className="fas fa-star fa-stack-1x"></i>
        </span>
        <span className="fa-stack fa-xs icon-star">
          <i className="fa fa-square fa-stack-2x"></i>
          <i className="fas fa-star fa-stack-1x"></i>
        </span>
        <span className="fa-stack fa-xs icon-star">
          <i className="fa fa-square fa-stack-2x"></i>
          <i className="fas fa-star fa-stack-1x"></i>
        </span>
      </div>
  }
  if (avgRatingRounded === 4){
    starRatingBus = 
      <div className="stars-div">
        <span className="fa-stack fa-xs icon-star">
          <i className="fa fa-square fa-stack-2x"></i>
          <i className="fas fa-star fa-stack-1x"></i>
        </span>
        <span className="fa-stack fa-xs icon-star">
          <i className="fa fa-square fa-stack-2x"></i>
          <i className="fas fa-star fa-stack-1x"></i>
        </span>
        <span className="fa-stack fa-xs icon-star">
          <i className="fa fa-square fa-stack-2x"></i>
          <i className="fas fa-star fa-stack-1x"></i>
        </span>
        <span className="fa-stack fa-xs icon-star">
          <i className="fa fa-square fa-stack-2x"></i>
          <i className="fas fa-star fa-stack-1x"></i>
        </span>
      </div>
  }
  if (avgRatingRounded === 5){
    starRatingBus = 
      <div className="stars-div">
        <span className="fa-stack fa-xs icon-star">
          <i className="fa fa-square fa-stack-2x"></i>
          <i className="fas fa-star fa-stack-1x"></i>
        </span>
        <span className="fa-stack fa-xs icon-star">
          <i className="fa fa-square fa-stack-2x"></i>
          <i className="fas fa-star fa-stack-1x"></i>
        </span>
        <span className="fa-stack fa-xs icon-star">
          <i className="fa fa-square fa-stack-2x"></i>
          <i className="fas fa-star fa-stack-1x"></i>
        </span>
        <span className="fa-stack fa-xs icon-star">
          <i className="fa fa-square fa-stack-2x"></i>
          <i className="fas fa-star fa-stack-1x"></i>
        </span>
        <span className="fa-stack fa-xs icon-star">
          <i className="fa fa-square fa-stack-2x"></i>
          <i className="fas fa-star fa-stack-1x"></i>
        </span>
      </div>
  }




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
            <img className='listing-show-img' src={this.props.currentBusiness.photos[0]} height="424"/>
            <img className='listing-show-img' src={this.props.currentBusiness.photos[1]} height="424"/>
            <img className='listing-show-img' src={this.props.currentBusiness.photos[2]} height="424"/>
            <img className='listing-show-img' src={this.props.currentBusiness.photos[3]} height="424"/>
          </div>

          <div className="bus1-about-box">
            <div className="bus-names">
              {bisName}
            </div>

            <div className="business-rating">
              {/* <p className="bis-rating"> */}
                {starRatingBus}
                {/* <img src="https://raw.githubusercontent.com/mattpettenato/git_test/main/large/large_5.png" /> */}

              {/* </p> */}
            </div>

          <div className="business-about">
            {bisAbout}
          </div>
          </div>
        </div>

        <div className="entire-page">
        <div className="center-div">
        <div className="guts-body">
        <div className="above-review">

        <div className="write-review">
          <Link to={`/businesses/${this.props.currentBusiness.id}/reviews`}>
            <button className="write-review-button">
            <i className="far fa-star"></i>
            &nbsp;&nbsp;Write a Review
            </button>
          </Link>
        </div>
          
        </div>
        
          <hr id="review-line"/>


        <div className="middle-portion">

        
        <div className="map-left">
          <h2>Location & Hours</h2>
            <BusinessMap business={this.props.currentBusiness}/>
        </div>
        <div className="time-list">
          <p>Mon: {bisHours}</p>
          <p>Tue: {bisHours}</p>
          <p>Wed: {bisHours}</p>
          <p>Thu: {bisHours}</p>
          <p>Fri: {bisHours}</p>
          <p>Sat: {bisHours}</p>
          <p>Sun: {bisHours}</p>
        </div>

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

            <div className="review-items-1">
              <ul className="review-box-1-work">
                {reviewBox1}
              </ul>
            </div>
          </div>
        </div>
        
        </div>

        </div>


        <div>

      </div>
      </div>
      <div className="right-side">
        <div className="info-bar">
          <div className="busdirbut" >
            <a href={`${bisWebsite}`}>{bisWebsite}</a>
            &nbsp;&nbsp;
            <i className="fa fa-external-link"></i>
            {/* <a href=`#{bisWebsite}`></a> */}
          </div>
        <hr id="side-hr" />
          <div className="busdirbut" >
            {bisHours}&nbsp;&nbsp;
            <i className="fas fa-clock"></i>
          </div>
        <hr id="side-hr" />
          <div className="busdirbut" >
            {bisPhone}&nbsp;&nbsp;
            <i className="fas fa-phone"></i>
          </div>
        </div>
      </div>
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
    )
  }
}

export default BusinessShow;
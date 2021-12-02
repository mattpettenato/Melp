import React from 'react';
import { Link } from "react-router-dom"
import HeaderContainer from '../header_container'
// import ReviewIndexContainer from '../reviews/review_index_container'
// import AvgRating from '../reviews/avg_rating_container'
import BusinessMap from './business_map'

class BusinessShowComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true }
  }


  componentDidMount() {
    this.props.fetchBusiness(this.props.match.params.businessId);
    this.props.fetchReviews(this.props.match.params.businessId)
      .then(() => {
        this.setState({ loading: false })
      })
  }


  render() {
    if (this.state.loading || !this.props.currentBusiness) {
      return <div></div>
    }
    // if (!this.props.currentBusiness && !this.props.currentBusiness.photoUrls) {
    //     return null; 
    // }
    return (
      <div className="business-show-main-container">
        <div className="business-show-main-left">
          <div className="show-header">
            <HeaderContainer businessId={this.props.currentBusiness.id} />
          </div>
          <div className="pictures-array">
            {this.props.currentBusiness.photoUrls.map((p, i) => (
              <div className="picture-holder" key={i}>
                <img className="show-picture" src={p} />
              </div>
            ))}
          </div>
          <div className="center-container">
            <div className="main-show-container">
              <div className="main-show">
                <ul className="show-info">
                  <li className="business-title">{this.props.currentBusiness.name}</li>
                  {/* <li><img className="rating-img" src={window.rating4} /> </li> */}
                  {/* <li><AvgRating businessId={this.props.currentBusiness.id}
                    reviews={this.props.reviews} />
                  </li> */}
                  <li className="business-bio">{this.props.currentBusiness.bio}</li>
                  {/* <li>{this.props.currentBusiness.location}</li>         */}
                  {/* <Link to="/businesses/{}" className="review-button-search">Write a Review</Link> */}
                  <Link to={`/businesses/${this.props.currentBusiness.id}/create`}>
                    <button className="review-button-search">Write a Review</button>
                  </Link>
                  <div className="reviews-container">
                    <div>
                      <h1 className="recommended">Recommended Reviews
                      </h1>
                      <div className="trust-flex">
                        <img className="header-logo-flex" src={window.logoURL} />
                        <h2 className="warning-text"><b>Your trust is our top concern,</b> so businesses can't pay to alter or remove their reviews.
                        </h2>
                      </div>

                    </div>
                  </div>
                  <div>
                    {/* <ReviewIndexContainer currentBusiness={this.props.currentBusiness} /> */}
                  </div>
                </ul>
              </div>
            </div>
            <div className="business-show-main-right-top">
              <div>
                <BusinessMap currentBusiness={this.props.currentBusiness} />
                {/* <img className="map-img" src={window.map} /> */}
              </div>
              <div>
                <div className="address-ul-container">
                  <ul className="address-ul">
                    <li>
                      <p>6362 San Pablo Ave</p>
                    </li>
                    <li>
                      <p>Unit H</p>
                    </li>
                    <li>
                      <p>Oakland, CA 94608 </p>
                    </li>
                    <li>
                      <p>Corner of 66th St</p>
                    </li>
                    <li>
                      <p>North Oakland</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="business-show-main-right">
                <div className="main-show-right">
                  <div className="business-info-div">
                    <div className="info-item-1">
                      <img className="phone-img" src={window.phone} />
                      <p>{this.props.currentBusiness.phone_number}</p>
                    </div>
                    {/* <div className="info-item-2">
                                            <img className="phone-img" src={window.direction} />
                                            <p className="info-par">Get Directions</p>
                                        </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>







      </div>
    )
  }
}

export default BusinessShowComponent;
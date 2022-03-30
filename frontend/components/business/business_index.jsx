// import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';
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

  // componentWillUnmount(){
  //   if (this.props.match.params.query === undefined) {
  //     this.props.fetchBusinesses()
  //   } else {
  //     this.props.getSearchBusinesses(this.props.match.params.query)
  //   }
  // }

  avg_rat(businessIdx) {
    for (let i = this.props.businesses.length -1; i >= 0; i--){
      
      if (businessIdx === this.props.businesses[i].id){
        let avgRatingRounded = Math.floor(this.props.businesses[i].average_rating)
        
        if (Math.floor(this.props.businesses[i].average_rating) === 1){
          return(
            <div className="stars-div">
              <span className="fa-stack fa-xs icon-star">
                <i className="fa fa-square fa-stack-2x"></i>
                <i className="fas fa-star fa-stack-1x"></i>
              </span>
            </div>
          )
        }

        if (Math.floor(this.props.businesses[i].average_rating) === 2){
          return(
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
          )
        }

        if (Math.floor(this.props.businesses[i].average_rating) === 3){
          return(
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
          )
        }
        
        if (Math.floor(this.props.businesses[i].average_rating) === 4){
          return(
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
          )
        }

        if (Math.floor(this.props.businesses[i].average_rating) === 5){
          return(
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
          )
        }
      }



    }
  }

  render(){
    // console.log(this.props)
    if (this.props.businesses.length === 4 ){
      for (let i = this.props.businesses.length -1; i >= 0; i--){
        // console.log(this.props.businesses[i])
        
      }

    }



    const items = this.props.businesses.map((item) => 
      <BusinessIndexItem business={item} key={item.id} fetchBusiness={this.props.fetchBusiness} fetchReviews={this.props.fetchReviews}/>
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
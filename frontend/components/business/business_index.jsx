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

componentWillUnmount(){
  if (this.props.match.params.query === undefined) {
    this.props.fetchBusinesses()
  } else {
    this.props.getSearchBusinesses(this.props.match.params.query)
  }
}

  render() {
    if (this.props.businesses.length === 4 ){
      for (let i = this.props.businesses.length -1; i >= 0; i--){
        console.log(this.props.businesses[i])
        
      }
    //   // console.log(Object.keys(this.props.businesses[0].reviews))
    //   // console.log(this.props.businesses[0].reviews)
    //   // Object.values(this.props.businesses[0].reviews).map( (k) => {
    //   //   console.log(k.rating)
    //   // })

    //   for (let i = this.props.businesses.length -1; i >= 0; i--){
    //     let avgRatingSum = 0;
    //     // console.log(Object.keys(this.props.businesses[i].reviews).length)
        
    //   Object.values(this.props.businesses[i].reviews).map( (k) => {
    //     // console.log(k.rating)
    //     avgRatingSum += k.rating
    //     // console.log(avgRatingSum)
    //   })
    // var avgRatingRounded = Math.floor(avgRatingSum / Object.keys(this.props.businesses[i].reviews).length)
    
    // //   for (let j = Object.keys(this.props.businesses[i].reviews).length -1; j >= 0; j--){
      
      
    //   //     // avgRatingSum += this.props.businesses[i].reviews[j].rating
    //   //     // console.log(this.props.businesses[i].reviews)
      
      
    //   //   }
    //   //   // avgRatingSum += this.props.reviews[i].rating
    //   //   // console.log(avgRatingSum)
    //   //   // console.log('test')
    // }
    // console.log(avgRatingRounded) // avg = sum/total
    //       // console.log(avgRatingSum)

    // }

    // for (let i = this.props.reviews.length -1; i >= 0; i--){
    //   avgRatingSum += this.props.reviews[i].rating
    //   // console.log(avgRatingSum)
    }


  let starRatingBus
  // if (avgRatingRounded === 1){
  //   starRatingBus =
  //     <div className="stars-div">
  //       <span className="fa-stack fa-xs icon-star">
  //         <i className="fa fa-square fa-stack-2x"></i>
  //         <i className="fas fa-star fa-stack-1x"></i>
  //       </span>
  //     </div>
  // }
  // if (avgRatingRounded === 2){
  //   starRatingBus = 
  //     <div className="stars-div">
  //       <span className="fa-stack fa-xs icon-star">
  //         <i className="fa fa-square fa-stack-2x"></i>
  //         <i className="fas fa-star fa-stack-1x"></i>
  //       </span>
  //       <span className="fa-stack fa-xs icon-star">
  //         <i className="fa fa-square fa-stack-2x"></i>
  //         <i className="fas fa-star fa-stack-1x"></i>
  //       </span>
  //     </div>

  // }
  // if (avgRatingRounded === 3){
  //   starRatingBus = 
  //     <div className="stars-div">
  //       <span className="fa-stack fa-xs icon-star">
  //         <i className="fa fa-square fa-stack-2x"></i>
  //         <i className="fas fa-star fa-stack-1x"></i>
  //       </span>
  //       <span className="fa-stack fa-xs icon-star">
  //         <i className="fa fa-square fa-stack-2x"></i>
  //         <i className="fas fa-star fa-stack-1x"></i>
  //       </span>
  //       <span className="fa-stack fa-xs icon-star">
  //         <i className="fa fa-square fa-stack-2x"></i>
  //         <i className="fas fa-star fa-stack-1x"></i>
  //       </span>
  //     </div>
  // }
  // if (avgRatingRounded === 4){
  //   starRatingBus = 
  //     <div className="stars-div">
  //       <span className="fa-stack fa-xs icon-star">
  //         <i className="fa fa-square fa-stack-2x"></i>
  //         <i className="fas fa-star fa-stack-1x"></i>
  //       </span>
  //       <span className="fa-stack fa-xs icon-star">
  //         <i className="fa fa-square fa-stack-2x"></i>
  //         <i className="fas fa-star fa-stack-1x"></i>
  //       </span>
  //       <span className="fa-stack fa-xs icon-star">
  //         <i className="fa fa-square fa-stack-2x"></i>
  //         <i className="fas fa-star fa-stack-1x"></i>
  //       </span>
  //       <span className="fa-stack fa-xs icon-star">
  //         <i className="fa fa-square fa-stack-2x"></i>
  //         <i className="fas fa-star fa-stack-1x"></i>
  //       </span>
  //     </div>
  // }
  // if (avgRatingRounded === 5){
  //   starRatingBus = 
  //     <div className="stars-div">
  //       <span className="fa-stack fa-xs icon-star">
  //         <i className="fa fa-square fa-stack-2x"></i>
  //         <i className="fas fa-star fa-stack-1x"></i>
  //       </span>
  //       <span className="fa-stack fa-xs icon-star">
  //         <i className="fa fa-square fa-stack-2x"></i>
  //         <i className="fas fa-star fa-stack-1x"></i>
  //       </span>
  //       <span className="fa-stack fa-xs icon-star">
  //         <i className="fa fa-square fa-stack-2x"></i>
  //         <i className="fas fa-star fa-stack-1x"></i>
  //       </span>
  //       <span className="fa-stack fa-xs icon-star">
  //         <i className="fa fa-square fa-stack-2x"></i>
  //         <i className="fas fa-star fa-stack-1x"></i>
  //       </span>
  //       <span className="fa-stack fa-xs icon-star">
  //         <i className="fa fa-square fa-stack-2x"></i>
  //         <i className="fas fa-star fa-stack-1x"></i>
  //       </span>
  //     </div>
  // }


    const items = this.props.businesses.map((item) =>
      <div className="bis-splash-container" key={item.id}>
        <div className="bis-splash" key={item.id}>
        <Link className="bis-link1" key={item.id} to={`/businesses/${item.id}`}>
          <img src={`https://github.com/mattpettenato/FullStack_Project/blob/main/melp_imgs/home/${item.id}/${item.id}.jpg?raw=true`}/>
          
          <div key={item.id}>
            <p className="bis-name">{item.name}</p>
            {/* {starRatingBus} */}
            <p>{Math.floor(item.average_rating)}</p>
              {/* <p className="bis-rating">{item.rating}</p> */}
              {/* <p className="bis-rating"><img src="https://raw.githubusercontent.com/mattpettenato/git_test/main/large/large_5.png"/></p> */}
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
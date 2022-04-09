import React from 'react';
import { Link } from 'react-router-dom';

class BusinessIndexItem extends React.Component {
  constructor(props) {
    super(props)
    
  }

  componentDidMount() {
    this.props.fetchBusiness(this.props.business.id);
  }

    avg_rat(businessIdx) {
    
      
      if (businessIdx === this.props.business.id){
        let avgRatingRounded = Math.floor(this.props.business.average_rating)
        
        if (Math.floor(this.props.business.average_rating) === 1){
          return(
            <div className="stars-div">
              <span className="fa-stack fa-xs icon-star">
                <i className="fa fa-square fa-stack-2x"></i>
                <i className="fas fa-star fa-stack-1x"></i>
              </span>
            </div>
          )
        }

        if (Math.floor(this.props.business.average_rating) === 2){
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

        if (Math.floor(this.props.business.average_rating) === 3){
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
        
        if (Math.floor(this.props.business.average_rating) === 4){
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

        if (Math.floor(this.props.business.average_rating) === 5){
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

  render() {
    // console.log(this.props.business)
    return (
      <div className="bis-splash-container" >
        <div className="bis-splash" >
        <Link className="bis-link" to={`/businesses/${this.props.business.id}`}>
            <img className='listing-show-img1' src={this.props.business.photos[0]} height="424"/>

          <div>
            <p className="bis-name">{this.props.business.name}</p>           
              {this.avg_rat(this.props.business.id)}
            <p className="bis-phone">{this.props.business.about}</p>
            <p className="bis-address">{this.props.business.address}</p>
          </div>
        </Link>
        
        </div>
      </div>
    )
  }
}

export default BusinessIndexItem;
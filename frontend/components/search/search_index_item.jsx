import React from 'react';
import { Link } from 'react-router-dom';

class SearchIndexItem extends React.Component {
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
    // console.log(this.props)
    return (
      <Link className="bis-link1" to={`/businesses/${this.props.business.id}`}>
      <div className="test-div-search">
        <div className="test-search-left">
          <img className='listing-show-img' src={this.props.business.photos[0]} height="424"/>
        </div>
        <div className="test-search-right">
          <div className="test-search-name">
            <p>
              {this.props.business.name}
            </p>
          </div>
          <div className="test-search-addy">
            <p>
              {this.props.business.address}
            </p>
          </div>
          <div className="test-search-rating">
              {this.avg_rat(this.props.business.id)}
          </div>
          <div className="index-category-show">
            {this.props.business.categories[0]}
            ,&nbsp;
            {this.props.business.categories[1]}
            {this.props.business.categories[2]}
            {this.props.business.categories[4]}
          </div>
        </div>
      </div>
      </Link>
    )
  }
}

export default SearchIndexItem;
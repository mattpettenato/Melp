import React from 'react';
import { Link } from 'react-router-dom';
// import { withRouter } from "react-router";

class SearchIndexItem extends React.Component {
  constructor(props) {
    super(props)
    
  }
// asd
  // componentDidMount() {
  //   this.props.fetchBusiness(this.props.business.id);
  // }

  componentDidMount(){
    // this.props.fetchBusinesses({ category: this.props.match.params.query});
    // this.props.fetchBusiness({ category: this.props.match.params.query});
    // this.props.fetchBusiness(this.props.match.params.businessId);
    // console.log(this.props)
  }

  avg_rat(businessIdx) {
    
    if (businessIdx === this.props.business.id){
      // let avgRatingRounded = Math.floor(this.props.business.average_rating)
      
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

    if (this.props.business.categories)

    return (
      <Link className="bis-link1" to={`/businesses/${this.props.business.id}`}>
      <div className="test-div-search">
        <div className="test-search-left">
          <img className='listing-show-img1' src={this.props.business.photos[0]} height="424"/>
        </div>
        <div className="test-search-right">
          <div className="test-search-name">
            <ul>
              {this.props.business.name}
            </ul>
          </div>
          <div className="test-search-addy">
            <ul>
              {this.props.business.address}
            </ul>
          </div>
          <div className="test-search-rating">
            <ul>
              {this.avg_rat(this.props.business.id)}
            </ul>
          </div>
          {/* <div className="index-category-show">
            {this.props.business.categories[0]}
            ,&nbsp;
            {this.props.business.categories[1]}
            {this.props.business.categories[2]}
            {this.props.business.categories[4]}
          </div> */}
        </div>
      </div>
      </Link>
    )
  }
}

// export default withRouter(SearchIndexItem);
export default SearchIndexItem;
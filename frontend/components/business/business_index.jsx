// import React from 'react';
// // import { Link } from "react-router-dom"
// import BusinessIndexItem from './business_index_item'

// class BusinessIndex extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   componentDidMount() {
//     if (this.props.match.params.query === undefined) {
//       this.props.fetchBusinesses()
//     } else {
//       this.props.getSearchBusinesses(this.props.match.params.query)
//     }
//     // this.props.fetchBusinesses()
//   }

//   render() {
//     if (!this.props.fetchBusinesses) {
//       return null;
//     } else {
//       return (
//         <div className="business-box">
//           <div className="business-index">
//             <h3 className="business-ul-title">Find the Best Businesses in Town</h3>
//           </div>
//           <div>
//             <ul className="business-ul">
//               {
//                 this.props.business.map((business) => (<BusinessIndexItem business={business}
//                   key={business.id}
//                   fetchBusiness={this.props.fetchBusiness}
//                   fetchReviews={this.props.fetchReviews} />))
//               }
//             </ul>
//           </div>
//         </div>
//       )
//     }
//   }
// }

// export default BusinessIndex;

import React from 'react';
import { Link } from 'react-router-dom';
// import LargeGoogleMap from './largeGoogleMap'
import NavBarContainer from '../nav_bar/nav_bar_container';
// import BusinessSearchShow from './business_search_show_container'

class BusinessIndex extends React.Component {
  constructor(props) {
    super(props)

  }

  avgRating(business) {
    let numRatings = Object.values(business.reviews).length;
    let sumRatings = 0;
    for (let i = 0; Object.values(business.reviews)[i]; i++) {
      sumRatings += business.reviews[i].rating;
    }
    const rating = sumRatings / numRatings;
    
  }


  render() {

    let num = 0;
    if (this.props.businesses) {
      return (
        <div className="business-index">
          <header className="index-nav-bar">
            <NavBarContainer />
          </header>
          <div className="business-index-container">
            <div className="search-results">
              All Results
            </div>

          </div>
test
        </div>
      )
    }
    else
      return (
        <div>
          broken
        </div>
      )

  }

  }


export default BusinessIndex;
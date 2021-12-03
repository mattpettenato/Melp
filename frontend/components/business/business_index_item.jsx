import React from 'react';
import { Link } from 'react-router-dom';

class BusinessIndexItem extends React.Component {
  constructor(props) {
    super(props)
    
  }

  componentDidMount() {
    this.props.fetchBusiness(this.props.business.id);
    // this.props.fetchReviews(this.props.business.id)
  }




  render() {
    return (
    <div>
      <h1>test</h1>
    </div>
    )
  }
}

export default BusinessIndexItem;
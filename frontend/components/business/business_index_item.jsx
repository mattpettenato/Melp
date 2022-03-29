import React from 'react';
import { Link } from 'react-router-dom';

class BusinessIndexItem extends React.Component {
  constructor(props) {
    super(props)
    
  }

  componentDidMount() {
    this.props.fetchBusiness(this.props.business.id);
  }

  render() {
    return (
    
      <h1>test</h1>
    
    )
  }
}

export default BusinessIndexItem;
import React from 'react';
import { Link } from 'react-router-dom';

class BusinessIndexItem extends React.Component {
  constructor(props) {
    super(props)

  }


  render() {
    const { business } = this.props;
  
    return (
      <div>
      {/* {console.log(this.props.businesses)} */}
      </div>
    )
  }
}

export default BusinessIndexItem;
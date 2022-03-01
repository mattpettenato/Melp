import React from 'react';

class ReviewListItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props)
    return(
      <div className="review-item-box">
        <div className="review-item">
          <h1>test</h1>
        </div>
      </div>
    )
  }
}

export default ReviewListItem
import React from "react";


const ReviewIndex = props => {
  let starRating
  // console.log(props.review.rating)
  if (props.review.rating === 1){
    starRating =
      <div className="stars-div">
        <span className="fa-stack fa-xs icon-star">
          <i className="fa fa-square fa-stack-2x"></i>
          <i className="fas fa-star fa-stack-1x"></i>
        </span>
      </div>
  }
  if (props.review.rating === 2){
    starRating = 
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

  }
  if (props.review.rating === 3){
    starRating = 
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
  }
  if (props.review.rating === 4){
    starRating = 
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
  }
  if (props.review.rating === 5){
    starRating = 
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
  }
  
  let authorName
  if (props.review.author_id) {
    authorName = props.allUsers[props.review.author_id].username
  }

  return (
    <div className="reviews01">
      <i className="fas fa-user fa-lg"></i>
      <div className="review-name">
        {authorName}
      </div>
      <div className="review-body">
        {props.review.body}
      </div>
      <div className="review-rating">
        {/* {props.review.rating} */}
        <div className="stars-div">
          {starRating}
        </div>
      </div>
    </div>
  )
}

export default ReviewIndex

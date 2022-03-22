import React from "react";
// import ReviewListItem from "./review_list_item"

const ReviewIndex = props => {
  // let stars = []
  // for (let i = 0; i < props.review.rating; i++){
  //   stars.push(<i class="fa-solid fa-star"></i>)
  // }

  // while (stars.length < 5) {
  //   let i = stars.lengthstars.push(<i class="fa-solid fa-star" key={i} size={20} color={'#e9e9e9'}/>)
  // }
  // console.log('test')
  // console.log(props)
  // console.log('test2')
    // console.log(this.props.allUsers)
    // console.log(this.props.allUsers)

  // console.log(props)
  // console.log()
  // console.log(props.review)
  // console.log(props)
  // let authorName = props.allUsers.map
  
  
  console.log(props.allUsers)
  let authorName
  if (props.review.author_id) {
    authorName = props.allUsers[props.review.author_id].username
  }
  console.log(props.review.author_id)
  for (let i = 0; i < props.allUsers.length; i++) {
    console.log('tetasdasd')
  }
  console.log


  return (
    <div className="reviews01">
      <div className="review-name">
        {authorName}
        {/* {props.review.name} namehere */}
      </div>
      <div className="review-body">
        {props.review.body}
      </div>
      <div className="review-rating">
        {props.review.rating}
      </div>
    </div>
  )
}

export default ReviewIndex

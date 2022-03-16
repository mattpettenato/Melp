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


  return (
    <div className="reviews01">
      <div className="review-name">
        {/* {props.review.name} */}
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
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div className="reviews">

//       </div>
//     )
//   }
// }
// export default ReviewIndex;
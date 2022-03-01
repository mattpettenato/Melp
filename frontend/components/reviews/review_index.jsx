import React from "react";
import ReviewItem from "./review_item"

class ReviewIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="reviews">
                <ul>
                    {this.props.reviews.reverse().map(review => (<ReviewItem   review={review}
                                                                    key={review.id}/>))}
                </ul>                                               
            </div>
        )
    }
}
export default ReviewIndex;
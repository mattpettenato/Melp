import React from "react";
import ReviewListItem from "./review_list_item"

class ReviewIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="reviews">
                <ul>
                    {this.props.reviews.reverse().map(review => (<ReviewListItem   review={review}
                                                                    key={review.id}/>))}
                </ul>                                               
            </div>
        )
    }
}
export default ReviewIndex;
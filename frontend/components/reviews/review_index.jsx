import React from "react";
import ReviewListItem from "./review_list_item"

class ReviewIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="reviews">
                <h1>
                    test
                </h1>
                <ul>
                    {/* {this.props.reviews.reverse().map(review => (<ReviewListItem   review={review}
                                                                    key={review.id}/>))} */}
                                                                    test
                </ul>                                               
            </div>
        )
    }
}
export default ReviewIndex;
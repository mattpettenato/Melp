import React from "react";
import { Link } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';
import $ from 'jquery'
class ReviewForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      business_id: this.props.match.params.businessId,
      author_id: this.props.currentUser.id,
      business_name: this.props.match.params.businessId.name,
      rating: "",
      body: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {

  }

  update(field) {
    // debugger
    return (e) => {
      // debugger
      this.setState({
        [field]: e.currentTarget.value
      })
      // console.log(this.state.rating)
    }
  }

  handleClick(field, rating) {
    
  }


  handleSubmit(e) {
    e.preventDefault();
    this.props.createReview(this.state, this.state.business_id);
    this.props.history.push(`/businesses/${this.props.match.params.businessId}`)
  }

  render() {
    return (
      <h1>test</h1>
    )
  }
}

export default ReviewForm;
import React from "react";
import NavBarContainer from '../../components/nav_bar/nav_bar_container';
// import { BsSquareFill } from 'react-icons/bs';
// import { AiFillStar } from 'react-icons/ai';
import { Link } from "react-router-dom";

export default class CreateReviewForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rating: 0,
      body: '',
      user_id: this.props.user_id,
      business_id: this.props.match.params.businessId
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clearErrors = this.clearErrors.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchBusiness(this.props.match.params.businessId)
  }

  handleSubmit(e) {
    e.preventDefault();
    const review = Object.assign({}, this.state);
    this.props.createReview(review, this.props.currentBusiness.id).then(() => this.props.history.push(`/businesses/${this.props.currentBusiness.id}`))
  }

  handleChange(field) {
    return e => this.setState({[field]: e.currentTarget.value})
  }

  clearErrors(e) {
    this.props.clearReviewErrors()
  }

  render () {
    let errors;
    if (this.props.errors.length) {
      errors = this.props.errors.map((error, index)=> 
        (<li key={index} className="review-error">{error}</li>)
      )
    }
    if (!this.props.currentBusiness) return null;
    
    return (
      <div>
        <div className="red-nav">
          <NavBarContainer/>
        </div>
        <form onSubmit={this.handleSubmit} className="create-review-form">
          <Link className="create-review-title" to={`/businesses/${this.props.currentBusiness.id}`}>{this.props.currentBusiness.name}</Link>

          <button type="submit" className="create-review-submit" onClick={this.clearErrors}>Post Review</button>
          <div className='errors-container'>
            <ul id="errors" className="review-errors">
              {errors}
            </ul>
          </div>
        </form>
      </div>
    )
  }
}
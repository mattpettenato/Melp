import React from "react";
import { useState } from "react";
import {Link, Redirect} from "react-router-dom";
import NavBar from "../nav_bar/nav_bar";
import NavBarContainer from "../nav_bar/nav_bar_container";
import SearchHome from "../search/search_home";

class ReviewForm extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      rating:  4,
      body: "",
      name: this.props.currentUser
    };
  this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentDidMount() {
    this.props.fetchBusiness(this.props.businessId);
    // this.props.fetchAllReviews(this.props.match.params.businessId)
  }

  handleSubmit(e){
    e.preventDefault();
    let review = this.state
    review.business_id = this.props.businessId
    
    this.props.createReview(this.props.businessId, review)
    this.props.history.push(`/businesses/${this.props.businessId}`)
    this.setState({
      body: '',
      authorId: this.props.currentUser,
      businessId: this.props.businessId,
      name: '',
      rating: ''
    })
  }

  handleInput(field) {
    return e => this.setState({ [field]: e.target.value })
  }

  update(field) {
    if (field === "rating"){
      return e => this.setState({ [field]: parseInt(e.currentTarget.value) });
    }
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  updateName(field){
    return e => this.setState({[field]: e.currentTarget.value})
  }

  renderErrors() {
    return (
      <ul className="error-msg">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    )
  }

  ratingRadio() {
    const updateRating = (ratingValue) => {
      this.setState({ rating: ratingValue })
    }
    return (
      <div className="review-ratings-1">
          <input type="radio" name="radAnswer" value="1" onClick={() => updateRating(1)}></input>
          <label>Not good</label>
          <input type="radio" name="radAnswer" value="2" onClick={() => updateRating(2)}></input>
          <label>Could've been better</label>
          <input type="radio" name="radAnswer" value="3" onClick={() => updateRating(3)}></input>
          <label>OK</label>
          <input type="radio" name="radAnswer" value="4" onClick={() => updateRating(4)}></input>
          <label>Good</label>
          <input type="radio" name="radAnswer" value="5" onClick={() => updateRating(5)}></input>
          <label>Great</label>
        
      </div>
    )
  }

  render(){


    let curBus1;
    if (this.props.business !== undefined) {
      curBus1 = this.props.business.name

    }

    return(
      <div id="wrapper">
        <div className="review-page">
        <div className="business-page-nav">
          <Link to="/">
            <img className="hero-img-bus-nav" src="https://raw.githubusercontent.com/mattpettenato/FullStack_Project/main/melp_imgs/melp_logo.png" />
          </Link>
          <SearchHome id="search-home-bus"/>
          <div className="busnav">
            <NavBarContainer/>
          </div>
        </div>

        <div className="review-page-1">
          <div className="review-bus-name">
            <div className="rev-name-1">
              <Link to={`/businesses/${this.props.businessId}`}>
                <h1>{curBus1}</h1>
                
              </Link>
            </div>

            <div className="review-guide">
              <a href="https://www.yelp.com/guidelines">Read our review guidelines</a>
            </div>
          </div>
          <div className="errors-message">
            {/* {this.renderErrors()} */}
          </div>

          <form className="review-form" onSubmit={this.handleSubmit}>
            <div className="review-body">
              <div className="review-text">
                {this.ratingRadio()}

                <div className="review-text-box">
                  <textarea
                    className="textarea-review-box"
                    type="text"
                    value={this.state.body}
                    placeholder="Doesn’t look like much when you walk past, but I was practically dying of hunger so I popped in. The definition of a hole-in-the-wall. I got the regular hamburger and wow…  there are no words. A classic burger done right. Crisp bun, juicy patty, stuffed with all the essentials (ketchup, shredded lettuce, tomato, and pickles). There’s about a million options available between the menu board and wall full of specials, so it can get a little overwhelming, but you really can’t go wrong. Not much else to say besides go see for yourself! You won’t be disappointed."
                    // onChange={this.handleInput("body")}
                    onChange={this.handleInput("body")}
                  >
                  </textarea>
                </div>
            <div className="post-review">
              <button className="post-review-button">
                Post Review
              </button>
            </div>
              {/* <h1>{this.props.authorId.username}</h1> */}
            {/* <label> Review will be posted from your account: {this.props.authorId.username}
              <input className="text-inputs1" type="text" value={this.state.name} onChange={this.updateName('name')}  />
              <textarea className="text-inputs1"  type="text" onChange={this.updateName('name')}> 
                {this.props.authorId.username}
              </textarea>
            </label> */}
                
              </div>
            </div>
          </form>
        </div>

      </div>
      <div className="fix-footer">

          <footer className="footer">
            <div className="about-user">
              <p className="about-user-contact">Contact</p>
              <div className='gmail'><p>mtp855@gmail.com</p></div>
            </div>
            <div className="mylinks">
              <p className="about-user-title">About</p>
              <a href="https://www.linkedin.com/in/matthew-pettenato-936236123/" target="_blank">
                <img className="ln-img" src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg" />
              </a>

              <a href="https://github.com/mattpettenato" target="_blank">
                <img className="git-img" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png" />
              </a>

            </div>

          </footer>
      </div>
      </div>
    )
  }
  }

  export default ReviewForm;

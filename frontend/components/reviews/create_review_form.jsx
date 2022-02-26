import React from "react";
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
    };

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentDidMount() {
    this.props.fetchBusiness(this.props.businessId)
  }

  handleSubmit(e){
    e.preventDefault();
    const businessId = parseInt(this.props.match.params.businessId);
    const formData = new FormData();
    formData.append('review[rating]', this.state.rating)
    formData.append('review[body]', this.state.body)
    formData.append('review[business_id]', businessId)
    this.props.createReview(formData).then(()=>{
      if (this.props.errors.length === 0) {
        this.props.history.push('/businesses/${businessId}')
      }
    })
  }

  update(field) {
    if (field === "rating"){
      return e => this.setState({ [field]: parseInt(e.currentTarget.value) });
    }
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  ratingPhrase(){
    switch(this.rating){
      case 1:
        return "Not good";
      case 2:
        return "Could've been better"
      case 3:
        return "OK";
      case 4:
        return "Good";
      case 5:
        return "Great"
    }
  }

  render(){
    if (!this.props.business) return null;

    return(
      <div>
        <div className="business-page-nav">
          <Link to="/">
            <img className="hero-img-bus-nav" src="https://raw.githubusercontent.com/mattpettenato/FullStack_Project/main/melp_imgs/melp_logo.png" />
          </Link>
          <SearchHome id="search-home-bus"/>
          <div className="busnav">
            <NavBarContainer/>
          </div>
        </div>
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
    )
  }
}

export default ReviewForm;
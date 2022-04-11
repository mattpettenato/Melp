import React from 'react'
import { Link } from 'react-router-dom'
import nav_bar_container from '../nav_bar/nav_bar_container'
import SearchHome from "../search/search_home"
import SearchMap from "../maps/search_map"
import NavBarContainer from '../../components/nav_bar/nav_bar_container';
import BusinessIndexContainer from '../business/business_index_container';
// import SearchIndexContainer from '../search/search_index_container.js'
import SearchIndex from './search_index'
import SearchIndexContainer from './search_index_container'


class Search extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      category: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.state.category == ""){
      this.props.history.push(`/businesses/search/All`); 
    }else{
      this.props.history.push(`/businesses/search/${this.state.category}`);
    }
    
    // window.location.reload();
  }

  handleChange(type) {
    return (e) => this.setState({ [type]: e.target.value });
  }

  componentDidMount(){
    this.props.fetchBusinesses({ category: this.props.match.params.query});
  }

  render(){


    return (
      <div className="search-page">
        <div className="business-page-nav">
          <Link to="/">
            <img className="hero-img-bus-nav" src="https://raw.githubusercontent.com/mattpettenato/FullStack_Project/main/melp_imgs/melp_logo.png" />
          </Link>
          <SearchHome id="search-home-bus"/>
          <div className="busnav">
            <NavBarContainer/>
          </div>
        </div>

        <div className="search-div">
          <div className="search-left">
            <SearchIndexContainer />
          </div>

      <div className="right-side-s">
        
        <div className="map-bar">
          <div className="space">

            <SearchMap businesses={this.props.businesses} query={this.props.match.params.query}/>
          </div>
            {/* <h1></h1> */}


        </div>
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

export default Search
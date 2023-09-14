import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../search/search_home';
import NavBarContainer from '../../components/nav_bar/nav_bar_container';
import BusinessIndexItem from '../business/business_index_item';
import BusinessIndexContainer from '../business/business_index_container'
import SearchHomeContainer from '../search/search_home_container'

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {

    this.props.fetchBusiness(1);
    this.props.fetchBusiness(2);
    this.props.fetchBusiness(3);
    this.props.fetchBusiness(4);
    // this.props.fetchUser(1);
    
  }

  render() {
      return (
        <div className="splash">
          <header id="main-nav-bar">
            <NavBarContainer />
          </header>
          <div className="splash-background">
            <img src="https://images.unsplash.com/photo-1615937722923-67f6deaf2cc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
          </div>

          <div className="splash-main">
            <div className="main-logo">
              <Link to="/"><img src="https://raw.githubusercontent.com/mattpettenato/FullStack_Project/main/melp_imgs/melp_logo.png" /></Link>
            </div>
            <SearchHomeContainer />
          </div>

          <div className="new-businesses">
            <p className="new-businesses-title">Find the Best Businesses in Town</p>
            <div>
              <div>
                <BusinessIndexContainer />
              </div>
            </div>
          </div>
          <footer className= "footer">
            <div className="about-user">
              <p className="about-user-contact">Contact</p>
              <div className='gmail'><p>mattpettenato@gmail.com</p></div>
            </div>
            <div className="mylinks">
              <p className="about-user-title">About</p>
              <a href="https://www.linkedin.com/in/matt-pettenato-936236123/" target="_blank">
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
export default Splash;
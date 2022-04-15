// import React from 'react';
// import { Link } from 'react-router-dom';
import { Link, withRouter } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';
// import BusinessIndexItem from './business_index_item';
import React, { useEffect, useRef } from 'react';
import SearchIndexItem from '../search/search_index_item'

class SearchIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      category: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.button = this.button.bind(this);
  }

  componentDidMount(){
    this.props.fetchBusinesses({ category: this.props.match.params.query});
  }

  handleSubmit(e){
    e.preventDefault();

    if (this.state.category == "" ) {
      this.props.history.push(`/businesses/search/All`)
    } else {
      this.props.history.push(`businesses/search/${this.state.category}`)
    }
  }

  handleChange(type) {
    return (e) => this.setState({ [type]: e.target.value })
  }

  button(category){
    this.props.history.push(`/businesses/search/${category}`)
    window.location.reload();
  }


  render() {
    const { category } = this.state;
    let orderedBusinesses = []
    let qq = 0
    for (let i = this.props.businesses.length -1; i >= 0 && orderedBusinesses.length < 8; i--){
      if (this.props.businesses[i].categories.includes(this.props.match.params.query.toLowerCase())){
        orderedBusinesses.push(this.props.businesses[i])
      } else if (this.props.match.params.query === "All" || this.props.match.params.query === "all"){
        orderedBusinesses.push(this.props.businesses[i])
      } else {
        qq ++

      }
    }

    let qqchecker

    let orderedBus = []
    for (let i = this.props.businesses.length -1; i >= 0 && orderedBus.length < 8; i--){
      orderedBus.push(this.props.businesses[i])
    }
    let oneBus = orderedBusinesses
    let busBox1 = oneBus.map((business, idx) => {
      return (
        <SearchIndexItem key={idx} currentUser={this.props.currentUser} business={business} fetchBusiness={this.props.fetchBusiness} fetchReviews={this.props.fetchReviews} />
      )
    })

    if (!this.props.fetchBusinesses) {
      return null;
    } else {
    return (
      <div className="left-sided">
        <div className="category-filter">
          <h2>Categories</h2>
          <Link to={`/businesses/search/All`}>
            <button onClick={() =>this.button("All")}>All</button> 
          </Link>
          <Link to={`/businesses/search/food`}>
            <button onClick={() =>this.button("Food")}>Food</button> 
          </Link>
          <Link to={`/businesses/search/drinks`}>
            <button onClick={() =>this.button("Drinks")}>Drinks</button> 
          </Link>
          <Link to={`/businesses/search/italian`}>
            <button onClick={() =>this.button("Italian")}>Italian</button>
          </Link>
          <Link to={`/businesses/search/mexican`}>
            <button onClick={() =>this.button("Mexican")}>Mexican</button> 
          </Link>
          <Link to={`/businesses/search/korean`}>
            <button onClick={() =>this.button("Korean")}>Korean</button> 
          </Link>
          <Link to={`/businesses/search/asian`}>
            <button onClick={() =>this.button("Asian")}>Asian</button> 
          </Link>                                                  
        </div>
        <div className="bus-index-main">
          <div className="pls-search-123" >
            {busBox1}
            {qqchecker}
          </div>
        </div>
      </div>
    )
    }
  
  }


  
}
// export default SearchIndex;
export default withRouter(SearchIndex)

// import React from 'react';
import { Link } from 'react-router-dom';
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
    // this.props.fetchBusinesses({ category: this.props.match.params.query });
    this.props.fetchBusinesses();

  }

  handleSubmit(e){
    e.preventDefault();

    if (this.state.category == "" ) {
      this.props.history.push(`/businesses/search/food`)
    } else {
      this.props.history.push(`businesses/search/${this.state.category}`)
    }

    // window.location.reload();
  }

  handleChange(type) {
    return (e) => this.setState({ [type]: e.target.value })
  }

  button(category){
    this.props.history.push(`/businesses/search/${category}`)
    window.location.reload();
  }


  render() {
    // console.log(this.props)
    const { category } = this.state;
    // const {categories} = this.props.business
    // console.log(this.props)
    let orderedBus = []
    for (let i = this.props.businesses.length -1; i >= 0 && orderedBus.length < 8; i--){
      orderedBus.push(this.props.businesses[i])
    }

    let oneBus = orderedBus
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
          <button onClick={() =>this.button("bars")}>Bars</button>
          <button onClick={() =>this.button("restaurant")}>Restaurants</button>
          <button onClick={() =>this.button("boba")}>Boba</button> 
        </div>
        <div className="bus-index-main">
          <div className="pls-search-123" >
            {busBox1}
          </div>
        </div>
      </div>
    )
  }
  }
}
export default SearchIndex;

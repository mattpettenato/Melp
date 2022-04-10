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

  // componentDidMount(){
  //   // this.props.fetchBusinesses({ category: this.props.match.params.query });
  //   this.props.fetchBusinesses();

  // }

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

    window.location.reload();
  }

  handleChange(type) {
    return (e) => this.setState({ [type]: e.target.value })
  }

  button(category){
    
    this.props.history.push(`/businesses/search/${category}`)
    // this.props.history.push(`/businesses/search/${category === '' ? 'all' : category}`)
    // console.log(this.props.history)
    window.location.reload();
  }


  render() {
    const { category } = this.state;
    // console.log(window.location.href.slice(35,-1))
    // const {categories} = this.props.business
    // console.log(window.location.href.slice(42))
    // console.log(this.props)


    let orderedBusinesses = []
    let qq = 0
    for (let i = this.props.businesses.length -1; i >= 0 && orderedBusinesses.length < 8; i--){
      if (this.props.businesses[i].categories.includes(this.props.match.params.query)){
        orderedBusinesses.push(this.props.businesses[i])
      } else if (this.props.match.params.query === "All" || this.props.match.params.query === "all"){
        orderedBusinesses.push(this.props.businesses[i])
      } else {
        // orderedBusinesses.push(this.props.businesses[i])
        qq ++
        // console.log(qq)
      }
    }
    // console.log()
    let qqchecker
    // if (qq === 5){
    //   qqchecker = <h1>Please Try a Different Search Term</h1>
      
    // }



    // console.log(orderedBusinesses)
    // let oneReview = orderedReview
    // let reviewBox1 = oneReview.map((review, idx) => {
    //   return (
    //     <ReviewIndex className="rev-box-1" key={idx} deleteReview={this.props.removeReview} currentUser={this.props.currentUser} review={review} allUsers={this.props.allUsers} />
    //   )
    // })




    let orderedBus = []
    for (let i = this.props.businesses.length -1; i >= 0 && orderedBus.length < 8; i--){
      orderedBus.push(this.props.businesses[i])
    }
    // console.log(orderedBus)
    // let oneBus = orderedBus
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

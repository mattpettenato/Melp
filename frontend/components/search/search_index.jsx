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
      // b: []
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
      this.props.history.push(`/businesses/search/all`)
    } else {
      this.props.history.push(`businesses/search/${this.state.category}`)
    }

  }

  handleChange(type) {
    return (e) => this.setState({ [type]: e.target.value })
  }

  button(category){
    this.props.history.push(`/businesses/search/${category}`)
    // window.location.reload();
  }

  render() {
    // console.log(this.props)
    // console.log(this.state)


    
    const { category } = this.state;
    let orderedBusinesses = []
    let qq = 0
    for (let i = this.props.businesses.length -1; i >= 0 && orderedBusinesses.length < 20; i--){
      if (this.props.businesses[i].categories.includes(this.props.match.params.query.toLowerCase())){
        orderedBusinesses.push(this.props.businesses[i])
      } else if (this.props.match.params.query === "All" || this.props.match.params.query === "all"){
        orderedBusinesses.push(this.props.businesses[i])
      } else {
        qq ++
    // console.log('qq: ' + qq)

      }
    }
    // console.log(orderedBusinesses)

    let qqchecker

    let orderedBus = []
    for (let i = this.props.businesses.length -1; i >= 0 && orderedBus.length < 8; i--){
      orderedBus.push(this.props.businesses[i])
    }
    let oneBus = orderedBusinesses

    // if (orderedBusinesses.length === 0){

    // }
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
  <select name="search-term" id="terms">
    <option value="all">All</option>
    <option value="italian">Italian</option>
    <option value="asian">Asian</option>
    <option value="mexican">Mexican</option>
    <option value="boba">Boba</option>
    <option value="pizza">Pizza</option>
    <option value="tacos">Tacos</option>
    <option value="bbq">BBQ</option>
    <option value="food">Food</option>
    <option value="drinks">Drinks</option>
    <option value="korean">Korean</option>
    {/* <option value="chicken">Chicken</option> */}
    <option value="coffee">Coffee</option>
    <option value="dessert">Dessert</option>
    <option value="pastry">Pastry</option>
    {/* <option value="tea">Tea</option> */}
    {/* <option value="pasta">Pasta</option> */}
  </select>
  {/* <input type="submit" value="Submit"></input> */}
  <button onClick={() =>this.button(document.getElementById("terms").value)}>Submit</button>

          {/* <Link to={`/businesses/search/all`} replace>
            <button onClick={() =>this.button("all")}>All</button> 
          </Link>
          <Link to={`/businesses/search/food`} replace>
            <button onClick={() =>this.button("food")}>Food</button> 
          </Link>
          <Link to={`/businesses/search/drinks`} replace>
            <button onClick={() =>this.button("drinks")}>Drinks</button> 
          </Link>
          <Link to={`/businesses/search/italian`} replace>
            <button onClick={() =>this.button("italian")}>Italian</button>
          </Link>
          <Link to={`/businesses/search/mexican`} replace>
            <button onClick={() =>this.button("mexican")}>Mexican</button> 
          </Link>
          <Link to={`/businesses/search/korean`} replace>
            <button onClick={() =>this.button("korean")}>Korean</button> 
          </Link>
          <Link to={`/businesses/search/asian`} replace>
            <button onClick={() =>this.button("asian")}>Asian</button> 
          </Link>                                                   */}
        </div>
        <div className="bus-index-main">
          <div className="pls-search-123" >
            {orderedBusinesses.length === 0 ? <p>There are no results with those search parameters</p> : busBox1}
            {/* {busBox1} */}
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

import React from 'react'
import { Link } from 'react-router-dom';


class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      category: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.button = this.button.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.category == "") {
      // this.props.history.push(`/businesses/search/all`);
      console.log(this.state)

    } else {
      // this.props.history.push(`/businesses/search/${this.state.category}`);
      console.log(this.state)
    }
  }

  handleChange(type) {
    return (e) => this.setState({ [type]: e.target.value });
  }

  componentDidMount(){
    // this.props.fetchBusinesses();
  }

  button(category){
    this.props.history.push(`/businesses/search/${category}`)
    window.location.reload();
  }

  render(){
    const { category } = this.state;
    // console.log(this.props)
    return (
      <div className="homesearch">
        <form className="search-bar-form" onSubmit={this.handleSubmit}>
            <label id="findme">Find</label>
          <div id="leftDiv">
            <input value={category} className="findsearchtext" type="text" placeholder="Food, Drinks, BBQ, Pizza..." onChange={this.handleChange("category")}/>
          </div>
            <label id="findme">Near</label>
          <div id="rightDiv">
            <input className="findneartext" type="text" placeholder="San Francisco" />
          </div>
          <span id="search-submit" style={{width : '24px', height : '24px'}} >
          <Link to={`/businesses/search/${category}`}>
            
            <button type="submit" to="/businesses/search/all" className="search-btn" >
            {/* <button type="submit" className="search-btn" > */}
              {/* <Link to=`/businesses/search/${category}`> */}
              <i className="fas fa-search fa-lg"></i>
              {/* </Link> */}
            </button>
            
          </Link>
          </span>
        </form>
      </div>
    )
  }
}

export default Search;
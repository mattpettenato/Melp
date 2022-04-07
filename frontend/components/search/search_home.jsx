import React from 'react'
import { Link, withRouter } from 'react-router-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      category: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault();
    let category = this.state.category
    this.props.history.push(`/businesses/search/${category === '' ? 'all' : category}`)
  }

  update(field){
    return e => this.setState({[field]: e.currentTarget.value})
  }

  render(){
    // console.log(this.props)
    return (
      <div className="homesearch">
        {/* <form className="search-bar-form" onSubmit={this.handleSubmit}> */}
        <form className="search-bar-form">
          <label id="findme">Find</label>
          <div id="leftDiv">
            {/* <input value={category} className="findsearchtext" type="text" placeholder="Food, Drinks, BBQ, Pizza..." onChange={this.handleChange("category")}/> */}
            <input type='text' className="findsearchtext" placeholder='Food, Drinks, BBQ, Pizza...' value={this.state.category} onChange={this.update('category')}/>
          </div>
          <label id="findme">Near</label>
          <div id="rightDiv">
            <input className="findneartext" type="text" placeholder="San Francisco" />
          </div>
          <span id="search-submit" style={{width : '24px', height : '24px'}} >
            {/* <Link to={`/businesses/search/${category}`}> */}
            {/* <button type="submit" to="/businesses/search/all" className="search-btn" >
              <i className="fas fa-search fa-lg"></i>
            </button> */}
            <button className="search-btn" onClick={this.handleSubmit}><i className="fas fa-search fa-lg"></i></button>
            {/* </Link> */}
          </span>
        </form>
      </div>
    )
  }
}

export default withRouter(Search);
import { connect } from "react-redux";
import Search from "./search_home";
import { fetchBusinesses } from "../../actions/business_actions";
// import { withRouter } from "react-router";

const mSTP = (state) => {
  return {
    businesses: Object.values(state.entities.businesses),
    currentUser: state.entities.users[state.session.id]
  }
}

const mDTP = dispatch => {
  return {
    fetchBusinesses: () => dispatch(fetchBusinesses()),
    logout: () => dispatch(logout())
  }
}

// export default connect(mSTP, mDTP)(Search)
export default connect(mSTP, mDTP)(Search)
// export default withRouter(connect(mSTP, mDTP)(Search))


// import { withRouter } from "react-router";
// // import SearchBar from "./search_bar";
// import Search from "./search_home";
// import { connect } from "react-redux";

// export default withRouter(connect(null,null)(Search))
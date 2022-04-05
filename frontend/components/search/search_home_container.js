import { connect } from "react-redux";
import Search from "./search_home";
import { fetchBusinesses } from "../../actions/business_actions";

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

export default connect(mSTP, mDTP)(Search)
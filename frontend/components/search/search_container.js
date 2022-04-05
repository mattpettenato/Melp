import { connect } from "react-redux";
import Search from "./search";
import { fetchBusinesses } from "../../actions/business_actions";
import { logout } from "../../actions/session_actions"

const mSTP = (state) => {
  return {
    businesses: Object.values(state.entities.businesses),
    currentUser: state.entities.users[state.session.id]
  }
}

const mDTP = dispatch => {
  return {
    fetchBusinesses: (searchTerm) => dispatch(fetchBusinesses(searchTerm)),
    logout: () => dispatch(logout())
  }
}

export default connect(mSTP, mDTP)(Search)
import usersReducer from "./users_reducer";
import reviewsReducer from "./reviews_reducer";
import { combineReducers } from "redux";
import businessesReducer from "./businesses_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  businesses: businessesReducer,
  reviews: reviewsReducer
})

export default entitiesReducer
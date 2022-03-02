// import { combineReducers } from "redux";

// import sessionErrorsReducer from "./session_errors_reducer";

// const errorsReducer = combineReducers({
//   session: sessionErrorsReducer
// });

// export default errorsReducer;

import sessionErrorsReducer from "./session_errors_reducer";
import { combineReducers } from "redux";
import reviewsErrors from './reviews_errors_reducer'


const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  reviewsErrors: reviewsErrors
})

export default errorsReducer
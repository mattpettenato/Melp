// import { combineReducers } from "redux";

// import sessionErrorsReducer from "./session_errors_reducer";

// const errorsReducer = combineReducers({
//   session: sessionErrorsReducer
// });

// export default errorsReducer;

import sessionErrorsReducer from "./session_errors_reducer";
import { combineReducers } from "redux";

const errorsReducer = combineReducers({
  session: sessionErrorsReducer

})

export default errorsReducer
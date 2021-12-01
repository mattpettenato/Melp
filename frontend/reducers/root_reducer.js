// import { combineReducers } from 'redux';
// import SessionReducer from './session_reducer.js'
// // import ErrorsReducer from './errors_reducer'
// // import EntitiesReducer from './entities_reducer'

// const rootReducer = combineReducers({
//   session: SessionReducer
// })

// export default rootReducer;

import { combineReducers } from "redux";
import entitiesReducer from "./entities_reducer";
import errorsReducer from "./errors_reducer";
import sessionReducer from "./session_reducer";
import uiReducer from "./ui_reducer";

const rootReducer = combineReducers({
  entities: entitiesReducer,
  errors: errorsReducer,
  session: sessionReducer,
  // ui: uiReducer
})

export default rootReducer

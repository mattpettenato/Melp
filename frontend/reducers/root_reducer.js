// import { combineReducers } from 'redux';
// import SessionReducer from './session_reducer.js'
// // import ErrorsReducer from './errors_reducer'
// // import EntitiesReducer from './entities_reducer'

// const rootReducer = combineReducers({
//   session: SessionReducer
// })

// export default rootReducer;

import { combineReducers } from 'redux';

import entities from './entities_reducer';
import session from './session_reducer';
import errors from './errors_reducer';

const rootReducer = combineReducers({
  entities,
  session,
  errors,
});

export default rootReducer;

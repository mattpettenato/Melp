import { combineReducers } from 'redux';
import SessionReducer from './session_reducer.js'
// import ErrorsReducer from './errors_reducer'
// import EntitiesReducer from './entities_reducer'

const rootReducer = combineReducers({
  session: SessionReducer
})

export default rootReducer;
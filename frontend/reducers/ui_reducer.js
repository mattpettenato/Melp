// import { combineReducers } from 'redux';

// import filters from './filters_reducer';
// import modal from './modal_reducer';

// export default combineReducers({
//   filters,
//   modal
// });


import { combineReducers } from "redux";
import modalReducer from "./modal_reducer";

const uiReducer = combineReducers({
  modal: modalReducer
})

export default uiReducer
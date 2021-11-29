// import {
//   RECEIVE_CURRENT_USER,
//   LOGOUT_CURRENT_USER
// } from '../actions/session_actions';

// const _nullUser = Object.freeze({
//   id: null
// });

// const sessionReducer = (state = _nullUser, action) => {
//   Object.freeze(state);
//   switch (action.type) {
//     case RECEIVE_CURRENT_USER:
//       return { id: action.currentUser.id };
//     default:
//       return state;
//   }
// };

// export default sessionReducer;

import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_USER,
} from '../actions/session_actions';

const _nullUser = Object.freeze({
  currentUser: null
});

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, { currentUser });
    default:
      return state;
  }
};

export default sessionReducer;

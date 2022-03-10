import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import * as SessionUtil from './util/session_api_util'
import Root from './components/root'
import createStore from './store/store';
import {createReview} from './util/reviews_api_util'
import {fetchBusiness} from './actions/business_actions'


// document.addEventListener('DOMContentLoaded', () => {
//   const root = document.getElementById('root');
//   let store;
//   if (window.currentUser) {
//     const preloadedState = {
//       entities: {
//         users: {
//           [window.currentUser.id]: window.currentUser
//         }
//       },

//       session: {
//         id: window.currentUser.id
//       }
//     };
//     store = configureStore(preloadedState);
//     delete window.currentUser;
//   } else {
//     store = configureStore();
//   }
  
//   window.store = store;
//   window.getState = store.getState;


//   ReactDOM.render(<Root store={store} />, root)
// })

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let preloadedState = undefined
  let store;
  if (window.currentUser){
      preloadedState = {
          entities: {
              users: {
                  [window.currentUser.id]: window.currentUser
              }
          },
          session: {
              currentUser: window.currentUser
          }
      }
      store = configureStore(preloadedState);
  } else {
      store = configureStore();
  }

  window.store = store;
  window.getState = store.getState;
  window.createReview = createReview;
  window.fetchBusiness = fetchBusiness();
  ReactDOM.render(<Root store={store}/>, root);
});
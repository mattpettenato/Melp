import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import * as SessionUtil from './util/session_api_util'
import Root from './components/root'
import createStore from './store/store';


// document.addEventListener("DOMContentLoaded", () => {
//   const root = document.getElementById("root");
//   let preloadedState = undefined;
//   if (window.currentUser) {
//     preloadedState = {
//       session: {
//         currentUser: window.currentUser
//       }
//     };
//   }
//   const store = configureStore(preloadedState);
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root')
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: {
          [window.currentUser.id]: window.currentUser
        }
      },

      session: {
        id: window.currentUser.id
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  //For Testing
  window.login = SessionUtil.login
  window.signup = SessionUtil.signup
  window.logout = SessionUtil.logout
  window.getState = store.getState
  window.dispatch = store.dispatch
  ReactDOM.render(<Root store={store} />, root)
})
  // ReactDOM.render(<h1>Welcome to Melp</h1>, root);
  // ReactDOM.render(<h1> Hello </h1>, root);

  // window.getState = store.getState;
  // window.dispatch = store.dispatch;


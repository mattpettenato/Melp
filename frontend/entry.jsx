import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();
  ReactDOM.render(<h1>Welcome to Melp</h1>, root);
  // ReactDOM.render(<Root store={store} />, root);
  ReactDOM.render(<h1> Hello </h1>, root);

  window.getState = store.getState;
  window.dispatch = store.dispatch;
});


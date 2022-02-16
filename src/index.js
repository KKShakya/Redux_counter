import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./App";
import { createStore } from "redux";
import allReducers from "./redux/reducer/index.js";
import { Provider } from "react-redux";

//The created store
const store = createStore(
  allReducers,
);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
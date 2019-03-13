import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
// needed dependancies
// applyMiddleware from redux
import { createStore, applyMiddleware, compose } from 'redux';
// thunk from redux-thunk
import thunk from 'redux-thunk';
// logger from redux-logger
// import logger from './logger';
// rootReducer from ./reducers


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  //   /* applyMiddleware goes here */
  composeEnhancers(applyMiddleware(thunk, logger))
);

// const store = createStore(
//   rootReducer
//   /* applyMiddleware goes here */
  
// );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

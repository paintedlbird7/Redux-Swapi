import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
// needed dependancies
// applyMiddleware from redux
import { createStore, applyMiddleware} from 'redux';
// thunk from redux-thunk
import thunk from 'redux-thunk';
// logger from redux-logger;
import logger from './logger';
import rootReducer from './reducers';
// import charsReducer from "./reducers";


const store = createStore(rootReducer, applyMiddleware(thunk, logger));

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(
//   rootReducer,
//   //   /* applyMiddleware goes here */
//   composeEnhancers(applyMiddleware(thunk, 
//     logger
//     ))
// );

// const store = createStore(
//   rootReducer
//   /* applyMiddleware goes here */
  
// );

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );


const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
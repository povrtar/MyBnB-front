import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import {Provider }from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import reducers from "./reducers";
  let storeEnhancer=applyMiddleware(thunk);
ReactDOM.render(
    <Provider store={createStore(reducers,storeEnhancer)}>
    <App/>
    </Provider>,
    document.querySelector("#root")
);
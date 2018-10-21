// import { browserHistory } from 'react-router'
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { combineReducers } from 'redux';

import web3 from './reducers/web3';
import controller from './reducers/controller';

const reducer = combineReducers({
  web3: web3,
  controller: controller
});

// Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;

import { createStore, applyMiddleware } from 'redux';
import reducers from './modules/';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import apiMiddleware from './middlewares/api';
import axios from 'axios';
export const history = createHistory();

export default function configureStore() {
  const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(routerMiddleware(history), apiMiddleware, thunk),
  ));

  return store;
}
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './modules/';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

export default function configureStore() {
  const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(routerMiddleware(history)),
  ));

  return store;
}
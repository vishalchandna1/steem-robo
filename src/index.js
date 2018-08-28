import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './components/containers/AppContainer/AppContainer';
import registerServiceWorker from './registerServiceWorker';
import { ConnectedRouter } from 'react-router-redux';
import { history } from './redux/store';
import { Provider } from 'react-redux'
import store from './redux/store';

ReactDOM.render(
  <Provider store={store()}>
    <ConnectedRouter history={history}>
      <React.Fragment>
        <AppContainer/>
      </React.Fragment>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();

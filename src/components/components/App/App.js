import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    props.initSteemConnect();
    props.setAccessToken();
  }
  render() {
    const {routes} = this.props
    return (
      <div className="App">
        <Switch>
          {routes.map(route => {
            return <Route key={route.path} exact={route.exact} path={route.path} component={route.component} />
          }
          )}
        </Switch>
      </div>
    )
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import 'typeface-roboto';
import NavBar from '../NavBar/NavBar'

class App extends Component {
  constructor(props) {
    super(props);
    props.initSteemConnect();
    props.setAccessToken();
    props.setAccountGlobalConfig();
  }
  render() {
    const {routes, name, loginUrl, isLoggedIn} = this.props
    return (
      <div className="App">
        <NavBar name={name} loginUrl={loginUrl} isLoggedIn={isLoggedIn}/>
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

import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import 'typeface-roboto';
import NavBar from '../NavBar/NavBar'

class App extends Component {
  constructor(props) {
    super(props);
    props.initSteemConnect();
    props.setAccessToken();
    props.setAccountGlobalConfig();
    console.log("jere go")
  }
  render() {
    const {routes, name, loginUrl, isLoggedIn, handleLogout} = this.props
    return (
      <div className="App">
        <NavBar name={name} loginUrl={loginUrl} isLoggedIn={isLoggedIn} logout={handleLogout}/>
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

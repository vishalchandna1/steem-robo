import React, { Component } from 'react';
import logo from '../../../logo.svg';
import './App.css';

class App extends Component {
  render() {
    const {data} = this.props
    const {list} = data
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="grid-list-container">
          This is a test
        </div>
      </div>
    )
  }
}

export default App;

import React, { Component } from 'react';
import SteemConnectLogin from '../../atoms/SteemConnectLogin/SteemConnectLogin'
import HomeContent from '../HomeContent/HomeContent'

class Home extends Component {
  render() {
    const {loginUrl} = this.props
    return (
      <div>
        <HomeContent loginUrl={loginUrl}/>
      </div>
    )
  }
}

export default Home;

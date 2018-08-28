import React, { Component } from 'react';
import SteemConnectLogin from '../../atoms/SteemConnectLogin/SteemConnectLogin'

class Home extends Component {
  render() {
    const {loginUrl} = this.props
    return (
      <div>
        <SteemConnectLogin url={loginUrl}/>
      </div>
    )
  }
}

export default Home;

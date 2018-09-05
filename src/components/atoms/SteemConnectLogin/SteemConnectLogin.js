import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class SteemConnectLogin extends Component {
  render() {
    const {url} = this.props;
    return (
      <Button href={url} variant="contained" size="medium" color="primary">
        Login
      </Button>
    )
  }
}

export default SteemConnectLogin;

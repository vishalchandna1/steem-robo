import React, { Component } from 'react';
import SendLinkForReview from '../SendLinkForReview/SendLinkForReview'

class Dashboard extends Component {
  render() {
    console.log('here we go')
    return (
      <div>
        <SendLinkForReview  y='a' />
      </div>
    )
  }
}

export default Dashboard;

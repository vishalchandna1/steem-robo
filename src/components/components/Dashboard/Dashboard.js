import React, { Component } from 'react';
import SendLinkForReview from '../SendLinkForReview/SendLinkForReview'
import SteemPowerSliderContainer from '../../containers/SteemPowerSliderContainer/SteemPowerSliderContainer'

class Dashboard extends Component {
  componentDidMount() {
    const { sc2, setAccountInfo, invalidAcessToken } = this.props;
    setTimeout(() => {
      sc2.me((err, res) => {
        if (err) {
          invalidAcessToken();
        } else {
          setAccountInfo(res.account);
        }
      })
    })
  }
  render() {
    const { voting_weight, setVotingWeight, steem_power } = this.props;
    return (
      <div>
        <SendLinkForReview  y='a' />
      </div>
    )
  }
}

export default Dashboard;

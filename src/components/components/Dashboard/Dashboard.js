import React, { Component } from 'react';
import SendLinkForReview from '../SendLinkForReview/SendLinkForReview'
import SteemPowerSliderContainer from '../../containers/SteemPowerSliderContainer/SteemPowerSliderContainer'

class Dashboard extends Component {
  componentDidMount() {
    const { sc2, setAccountInfo, invalidAcessToken, setSliderLoading } = this.props;
    setSliderLoading(true);
    setTimeout(() => {
      sc2.me((err, res) => {
        if (err) {
          invalidAcessToken();
          setSliderLoading(false);
        } else {
          setAccountInfo(res.account);
          setSliderLoading(false);
        }
      })
    })
  }
  render() {
    const { voting_weight, setVotingWeight, steem_power } = this.props;
    return (
      <div>
        <SendLinkForReview  y='a' />
        <SteemPowerSliderContainer value={voting_weight} maxValue={100} handleChange={setVotingWeight} sp={steem_power}/>
      </div>
    )
  }
}

export default Dashboard;

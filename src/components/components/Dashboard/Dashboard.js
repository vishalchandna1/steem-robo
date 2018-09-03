import React, { Component } from 'react';
import SendLinkForReview from '../SendLinkForReview/SendLinkForReview'
import SteemPowerSlider from '../SteemPowerSlider/SteemPowerSlider'

class Dashboard extends Component {
  componentDidMount() {
    const { sc2, setAccountInfo, invalidAcessToken} = this.props;
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
    const { voting_weight, setVotingWeight } = this.props;
    return (
      <div>
        <SendLinkForReview  y='a' />
        <SteemPowerSlider value={voting_weight} minValue={0} maxValue={100} step={5} handleChange={setVotingWeight}/>
      </div>
    )
  }
}

export default Dashboard;

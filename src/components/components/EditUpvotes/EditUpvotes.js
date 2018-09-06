import React, { Component } from 'react';
import SteemPowerSliderContainer from '../../containers/SteemPowerSliderContainer/SteemPowerSliderContainer'
import Typography from '@material-ui/core/Typography';

class EditUpvotes extends Component {
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
        <SteemPowerSliderContainer value={voting_weight} maxValue={10} handleChange={setVotingWeight} sp={steem_power}/>
        <Typography variant="display2" className="d-flex align-items-center mt-5 pt-5 ml-5 justify-content-center">
          Edit your upvotes <Typography className="ml-2" variant="caption">(to be automated)</Typography>
        </Typography>
      </div>
    )
  }
}

export default EditUpvotes;

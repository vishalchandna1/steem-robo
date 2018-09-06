import { connect } from 'react-redux';
import EditUpvotes from '../../components/EditUpvotes/EditUpvotes'
import * as dashboardActions from '../../../redux/modules/dashboard';
import * as messagesActions from '../../../redux/modules/messages';
import * as accountActions from '../../../redux/modules/account';
import * as snackbarMessages from '../../../redux/constants/snackbarMessages';
import { push } from 'react-router-redux';
import steem from 'steem';

const mapStateToProps = (state) => {
  const { account_info, account_global_config } = state.account;
  let vesting_shares, delegated_vesting_shares;
  if (account_info) {
    vesting_shares = account_info.vesting_shares;
    delegated_vesting_shares = account_info.delegated_vesting_shares;
  }
  let total_vesting_shares, total_vesting_fund_steem;
  if (account_global_config) {
    total_vesting_shares = account_global_config.total_vesting_shares;
    total_vesting_fund_steem = account_global_config.total_vesting_fund_steem;
  }
  return {
    voting_weight: state.dashboard.voting_weight,
    sc2: state.home.sc2,
    steem_power: (account_info && account_global_config)  ? steem.formatter.vestToSteem((vesting_shares + delegated_vesting_shares), parseInt(total_vesting_shares.split(' ')[0]), parseInt(total_vesting_fund_steem.split(' ')[0])) : 0,
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  setVotingWeight: (value) => {
    dispatch(dashboardActions.setVotingWeight(value));
  },
  setAccountInfo: (values) => {
    dispatch(accountActions.setAccountInfo(values));
  },
  invalidAcessToken: (values) => {
    localStorage.clear();
    setTimeout(() => {
      dispatch(messagesActions.pushMessage({
        message: snackbarMessages.INVALID_ACCESS_TOKEN,
        type: 'danger',
        id: Math.random(),
        duration: 10000,
      }))
      dispatch(push('/'))
    })
  },
  setSliderLoading: (values) => {
    dispatch(dashboardActions.setSliderLoading(values));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(EditUpvotes)

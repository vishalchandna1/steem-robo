import { connect } from 'react-redux';
import Dashboard from '../../components/Dashboard/Dashboard'
import * as dashboardActions from '../../../redux/modules/dashboard';
import * as messagesActions from '../../../redux/modules/messages';
import * as accountActions from '../../../redux/modules/account';
import * as snackbarMessages from '../../../redux/constants/snackbarMessages';
import { push } from 'react-router-redux';

const mapStateToProps = (state) => {
  return {
    voting_weight: state.dashboard.voting_weight,
    sc2: state.home.sc2,
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  setVotingWeight: (value) => {
    dispatch(dashboardActions.setVotingWeight(value));
  },
  setAccountInfo: (values) => {
    console.log(values)
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
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

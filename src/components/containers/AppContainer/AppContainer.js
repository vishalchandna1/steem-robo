import { connect } from 'react-redux';
import App from '../../components/App/App'
import * as homeActions from '../../../redux/modules/home';
import * as accountActions from '../../../redux/modules/account';
import * as messagesActions from '../../../redux/modules/messages';
import * as snackbarMessages from '../../../redux/constants/snackbarMessages';
import * as routes from '../../../redux/constants/routes';
import { withRouter } from 'react-router';
import steemConnect from 'sc2-sdk';
import * as constants from  '../../../redux/constants/config';
import queryString from 'query-string';
import * as storage from '../../../redux/helpers/localStorage';
import { push } from 'react-router-redux';
import steem from 'steem';
console.log(steem)

const mapStateToProps = (state) => {
  const { account_info } = state.account;
  const { sc2 } = state.home
  return {
    routes: routes.appRoutes,
    sc2: sc2,
    isLoggedIn: storage.getData('is_logged_in'),
    name: account_info ? account_info.name : null,
    loginUrl: sc2 ? sc2.getLoginURL() : null,
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  initSteemConnect: () => {
    const sc2 = steemConnect.Initialize(constants.steemConnectConfig)
    dispatch(homeActions.initSteemConnect(sc2))
  },
  setAccessToken: (data) => {
    let parsedData = queryString.parse(props.location.search);
    let access_token = storage.getData('access_token')
    if (parsedData.access_token || access_token) {
      if (parsedData.access_token)
        storage.setData('access_token', parsedData.access_token)
      setTimeout(() => {
        dispatch(homeActions.setAccessToken(storage.getData('access_token')))
        storage.setData('is_logged_in', true)
        if (props.location.pathname === '/') {
          dispatch(push('/dashboard'))
        }
      })
    }
  },
  setAccountGlobalConfig: (data) => {
    steem.api.getDynamicGlobalProperties((err, res) => {
      if (err) {
        dispatch(messagesActions.pushMessage({
          message: snackbarMessages.FETCH_GLOBAL_VARIABLES_ERROR,
          type: 'warning',
          id: Math.random(),
          duration: 9999,
        }))
      } else {
        dispatch(accountActions.setAccountGlobalConfig(res));
      }
    })
  },
  handleLogout: () => {
    
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))

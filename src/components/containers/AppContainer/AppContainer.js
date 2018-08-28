import { connect } from 'react-redux';
import App from '../../components/App/App'
import * as homeActions from '../../../redux/modules/home';
import * as routes from '../../../redux/constants/routes';
import { withRouter } from 'react-router';
import steemConnect from 'sc2-sdk';
import * as constants from  '../../../redux/constants/config';
import queryString from 'query-string';
import * as storage from '../../../redux/helpers/localStorage';
import {push} from 'react-router-redux';

const mapStateToProps = (state) => {
  return {
    routes: routes.appRoutes,
    sc2: state.home.sc2,
    isLoggedIn: storage.getData('is_logged_in'),
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
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))

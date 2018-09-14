import { connect } from 'react-redux';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import * as faqConstants from '../../../redux/constants/faqs';
import * as storage from '../../../redux/helpers/localStorage';

const mapStateToProps = (state) => {
  const { sc2 } = state.home
  console.log(sc2)
  return {
    isLoggedIn: storage.getData('is_logged_in'),
    loginUrl: sc2 ? sc2.getLoginURL() : null,
  }
}

const mapDispatchToProps = (dispatch, props) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(HowItWorks)

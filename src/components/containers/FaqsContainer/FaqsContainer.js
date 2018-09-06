import { connect } from 'react-redux';
import Faqs from '../../components/Faqs/Faqs';
import * as faqConstants from '../../../redux/constants/faqs';

const mapStateToProps = (state) => {
  return {
    data: faqConstants.faqs,
  }
}

const mapDispatchToProps = (dispatch, props) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Faqs)

import { connect } from 'react-redux';
import SteemPowerSlider from '../../components/SteemPowerSlider/SteemPowerSlider';
import * as slideHelpers from '../../../redux/helpers/sliderHelpers';

const mapStateToProps = (state, props) => {
  const { sp } = props;
  const { step, min } = slideHelpers.getSliderStepAndMin(sp);
  const { voting_weight } = state.dashboard;
  const { frequency } = slideHelpers.getSliderData(sp * voting_weight / 100)
  return {
    step: step ? step : 25,
    minValue: min ? min : 25,
    frequency: frequency,
    slider_loading: state.dashboard.slider_loading,
  }
}

const mapDispatchToProps = (dispatch, props) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(SteemPowerSlider)

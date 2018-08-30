import React, { Component } from 'react';
import withStyles from '../../../redux/helpers/withStyles'
// import Slider from '@material-ui/lab/Slider';

const styles = props => {
  const {sliderWrapperStyles, sliderClassStyles} = props
  return {
    sliderWrapperClass: sliderWrapperStyles,
    sliderClass: sliderClassStyles,
  }
}

class NewSlider extends Component {
  render() {
    const {steps, handleChange, value} = this.props;
    return (
    <div>
      
    </div>
    )
  }
}

export default withStyles(styles)(NewSlider);

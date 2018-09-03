import React, { Component } from 'react';
import withStyles from '../../../redux/helpers/withStyles'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

const styles = props => {
  const {sliderWrapperStyles, sliderClassStyles} = props
  return {
    
  }
}

class NewSlider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.props.value
    }
  }
  handleAfterChange(value) {
    setTimeout(() => {
      this.props.handleChange(value)
    }, 1)
  }
  render() {
    const {step, handleChange, value, minValue, maxValue, formatLabel} = this.props;
    console.log(this.state, this.props)
    return (
      <InputRange value={this.state.value} minValue={minValue} maxValue={maxValue} step={step} 
      onChange={value => this.setState({ value })} onChangeComplete={value => this.handleAfterChange(value)} formatLabel={formatLabel} />
    )
  }
}

export default withStyles(styles)(NewSlider);

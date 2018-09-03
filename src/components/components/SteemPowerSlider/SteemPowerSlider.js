import React, { Component } from 'react';
import SendIcon from '@material-ui/icons/Send';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Slider from '../../atoms/Slider/Slider';
import withStyles from '../../../redux/helpers/withStyles';

const styles = props => {
  console.log(props)
  return {
    sliderContainer: {
      width: '90%',
      marginTop: '15%',
      marginLeft: '5%',
    },
  }
}

class SteemPowerSlider extends Component {
  render() {
    const { props } = this;
    const { classes, ...other } = props;
    return (
      <div className={props.classes.sliderContainer}>
        <Slider {...other} formatLabel={value => `${value}%`}/>
      </div>
    )
  }
}

export default withStyles(styles)(SteemPowerSlider);


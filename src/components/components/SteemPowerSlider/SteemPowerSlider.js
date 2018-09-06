import React, { Component } from 'react';
import SendIcon from '@material-ui/icons/Send';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Slider from '../../atoms/Slider/Slider';
import Button from '../../atoms/Button/Button';
import withStyles from '../../../redux/helpers/withStyles';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = props => {
  return {
    sliderContainer: {
      width: '90%',
      marginTop: '10%',
      marginLeft: '5%',
    },
    frequencyContainer: {
      marginBottom: 10 * props.theme.spacing.unit,
    },
    rowElements: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    sliderProgress: {
      color: 'skyblue',
      marginTop: 12 * props.theme.spacing.unit,
    },
    recommended: {
      marginLeft: props.theme.spacing.unit/2,
    }
  }
}

class SteemPowerSlider extends Component {
  render() {
    const { props } = this;
    const { classes, frequency, slider_loading, ...other } = props;
    if (slider_loading) {
      return <CircularProgress size={50} className={classes.sliderProgress} />
    }
    return (
      <div className={classes.sliderContainer}>
        <div className={classes.frequencyContainer}>
          <div>
            <Typography className={classes.rowElements} variant="body2">
              1 Post / <Typography variant="display2">{`${frequency} hours`}</Typography>
              {props.value >= 25 && props.value <= 50 && <Typography variant='caption' className={classes.recommended}>(Recommended)</Typography>}
            </Typography>
          </div>
          <Typography variant="caption">
            {`You can submit 1 post in every ${frequency} hours.`}
          </Typography>
        </div>
        <div className="slider-container"> 
          <Slider {...other} />
        </div>
        <Button className="mt-5" loading={false}>
          Save
        </Button>
      </div>
    )
  }
}

export default withStyles(styles)(SteemPowerSlider);


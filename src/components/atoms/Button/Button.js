import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => {
  return {
    buttonProgress: {
      color: 'white',
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: -12,
      marginLeft: -12,
    },
    sendButtonContainer: {
      position: 'relative',
      color: 'white',
    },
  }
}

class NewButton extends Component {
  
  render() {
    const {color, variant, className, children, handleSubmit} = this.props;
    const { classes, loading, containerClassName, href, ...other } = this.props;
    return (
      <div className={classes.sendButtonContainer}>
        <Button  variant={variant || 'contained'} color={color || 'primary'} className={className} onClick={handleSubmit || null} {...other}>
          {!loading && children}
        </Button>
        {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
      </div>
    )
  }
}

export default withStyles(styles)(NewButton);

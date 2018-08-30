import React, { Component } from 'react';
import SendIcon from '@material-ui/icons/Send';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '../../atoms/Button/Button';
import withStyles from '../../../redux/helpers/withStyles';

const styles = props => {
  console.log(props)
  return {
    container: {
      width: '80%',
      marginTop: '15%',
      marginLeft: '10%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px 0 40px 0'
    },
    sendForReviewTextField: {
      width: '90%',
    },
    rightIcon: {
      marginLeft: props.theme.spacing.unit,
    },
  }
}

class SendLinkForReview extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.container} elevation={4}>
        <TextField
          id="full-width"
          label="Your Post Link"
          className={classes.sendForReviewTextField}
          placeholder="Enter your post link here."
          fullWidth
          margin="dense"
        />
        <Button loading={false}>
          Send
          <SendIcon className={classes.rightIcon}></SendIcon>
        </Button>
      </Paper>
    )
  }
}

export default withStyles(styles)(SendLinkForReview);


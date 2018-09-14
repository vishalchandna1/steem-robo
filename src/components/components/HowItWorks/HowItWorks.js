import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import withStyles from '../../../redux/helpers/withStyles';
import Link from '../../atoms/Link/Link';
import SteemConnectLogin from '../../atoms/SteemConnectLogin/SteemConnectLogin'

const styles = props => {
  const { theme } = props;
  return {
    faqsContainer: {
      width: '80%',
      marginTop: 3 * theme.spacing.unit,
      marginLeft: '10%',
      paddingBottom: 5 * theme.spacing.unit,
    },
    heading: {
      fontSize: theme.typography.pxToRem(26),
      fontWeight: theme.typography.fontWeightRegular,
      paddingTop: 4 * theme.spacing.unit,
    },
    answerContent: {
      textAlign: 'left',
      color: theme.palette.grey[700],
    },
    howItWorksHeading: {
      paddingTop: 5 * theme.spacing.unit,
      paddingBottom: 6 * theme.spacing.unit,
    },
    smallMarginTop: {
      marginTop: 2 * theme.spacing.unit,
    },
    largeMarginTop: {
      marginTop: 4 * theme.spacing.unit,
    },
    bodyText: {
      padding: 4 * theme.spacing.unit,
      textAlign: 'left',
      color: theme.palette.grey[700],
    },
    marginLeft: {
      marginLeft: theme.spacing.unit,
    }
  }
}

const renderPanels = (props) => {
}

class HowItWorks extends Component {
  render() {
    const { classes, data, isLoggedIn, loginUrl } = this.props;
    return (
      <div className={classes.faqsContainer}>
        <Typography className={classes.howItWorksHeading} variant="display2">
          How it Works?
        </Typography>
        <Paper elevation={5} className={classes.largeMarginTop}>
          <Typography className={classes.heading}>Step 1 : Login Using SteemConnect V2.0{!isLoggedIn && <span className={classes.marginLeft}><SteemConnectLogin url={loginUrl}/></span>}</Typography>
          <Typography className={classes.bodyText}>
            The first step is to login our site which uses SteemConnect OAuth 2.0. This is done in order to create a access token for the steem robo to have necessary access.
          </Typography>
        </Paper>
        <Paper elevation={5} className={classes.largeMarginTop}>
          <Typography className={classes.heading}>Step 2 : Set Number of Upvotes (to be automated){isLoggedIn && <Link to="/edit-upvotes" className={classes.marginLeft}>Edit Upvotes</Link>}</Typography>
          <Typography className={classes.bodyText}>
            Once you are logged in, you will need to set a certain number of upvotes that you want SteemRobo to automate on your behalf. The more upvotes you want SteemRobo to automate, the more frequently you will be able to submit posts and you will receive more value. If you doesn't provide any upvote value we will take 0.25 to 2 upvotes based on your steem power & voting power available.
          </Typography>
        </Paper>
        <Paper elevation={5} className={classes.largeMarginTop}>
          <Typography className={classes.heading}>Step 3 : Get Upvotes{isLoggedIn && <Link to="/dashboard" className={classes.marginLeft}>Dashboard</Link>}</Typography>
          <Typography className={classes.bodyText}>
            You are almost done. Now, in order to receive upvotes on your post, go to the Dashboard page and submit your post link. Analyzing your post before submission can help you to validate it ahead of time and know for sure that your post is an authentic post.
          </Typography>
        </Paper>
        <Paper elevation={5} className={classes.largeMarginTop}>
          <Typography className={classes.heading}>YOU ARE DONE!</Typography>
          <Typography className={classes.bodyText}>
            Now SteemRobo will take over which would validate your post and assign a specific number of upvotes and value. The value given to a post totally depends upon the Bandwidth available and your votes/steem power that you have given the platform.
          </Typography>
        </Paper>
      </div>
    )
  }
}

export default withStyles(styles)(HowItWorks);


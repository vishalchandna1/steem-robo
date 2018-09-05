import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '../../atoms/Button/Button';
import withStyles from '../../../redux/helpers/withStyles';
import SteemConnectLogin from '../../atoms/SteemConnectLogin/SteemConnectLogin'

const styles = props => {
  return {
    navContainer: {
      width: '80%',
      marginTop: '10%',
      marginLeft: '10%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px 0 40px 0'
    },
    title: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexGrow: 1,
    },
    leftMargin: {
      marginLeft: props.theme.spacing.unit/2,
    },
  }
}

class NavBar extends Component {
  render() {
    const { classes, name, loginUrl, isLoggedIn } = this.props;
    return (
      <AppBar position="static" color="default">
        <Toolbar className="navbar-container">
          <Typography variant="body2" color="inherit" className={classes.title} >
            <Typography variant="title">{name ? 'HI' : ''}</Typography>
            <Typography variant="body1" className={classes.leftMargin}>{name ? name + ',' : ''}</Typography>
            <Typography variant="title" className={classes.leftMargin}> Welcome to Steemrobo</Typography>
            <div>
              <Button href={"/how-it-works"} size="medium" color="primary">
                How it works?
              </Button>
              <Button href={"/faqs"} size="medium" color="secondary">
                FAQs
              </Button>
              {!isLoggedIn && <div>
                <SteemConnectLogin url={loginUrl}/>
              </div>}
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }
}

export default withStyles(styles)(NavBar);


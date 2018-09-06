import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '../../atoms/Button/Button';
import withStyles from '../../../redux/helpers/withStyles';
import SteemConnectLogin from '../../atoms/SteemConnectLogin/SteemConnectLogin'
import Popover from '@material-ui/core/Popover';
import Paper from '@material-ui/core/Paper';

const styles = props => {
  return {
    navContainer: {
      padding: '12px 12px',
      background: props.theme.palette.common.white,
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
    userPopOverContainer: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
    },
    editUpvotesButton: {
      width: '100%',
      background: 'white',
      boxShadow: 'none',
      color: props.theme.palette.common.black,
      padding: '16px 22px',
      border: 0,
    },
    logoutButton: {
      width: '100%',
      padding: '16px 22px',
      border: 0,
      background: 'white',
      boxShadow: 'none',
    },
    avatarButton: {
      background: 'transparent',
      boxShadow: 'none',
      borderRadius: 7 * props.theme.spacing.unit,
      border: '2px solid grey',
      padding:'10px 12px',
      minWidth: 0,
      color: props.theme.palette.common.black,
      fontSize: '1.2rem',
    },
    linksContainer: {
      display: 'flex',
      alignItems: 'center',
    }
  }
}

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    };
  }
  handleAccountClick = event => {
    console.log(event.currentTarget)
    this.setState({
      anchorEl: event.currentTarget,
    });
  };

  handleAccountClose = () => {
    this.setState({
      anchorEl: null,
    });
  };
  render() {
    const { classes, name, loginUrl, isLoggedIn, logout } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
      <AppBar position="static" color="default" className={classes.navContainer}>
        <Toolbar className="navbar-container">
          <Typography variant="body2" color="inherit" className={classes.title} >
            <Typography variant="title">{name ? 'HI' : ''}</Typography>
            <Typography variant="body1" className={classes.leftMargin}>{name ? name + ',' : ''}</Typography>
            <Typography variant="title" className={classes.leftMargin}> Welcome to Steemrobo</Typography>
            <div className={classes.linksContainer}>
              <Button href={"/faqs"} size="medium" color="secondary">
                FAQs
              </Button>
              <Button href={"/how-it-works"} size="medium" color="primary">
                How it works?
              </Button>
              {!isLoggedIn && <div>
                <SteemConnectLogin url={loginUrl}/>
              </div>}
              {isLoggedIn && <div>
                <Button
                  aria-owns={open ? 'simple-popper' : null}
                  aria-haspopup="true"
                  variant="contained"
                  onClick={this.handleAccountClick}
                  className={classes.avatarButton}
                  color="inherit"
                >
                  <i className="fa fa-user"></i>
                </Button>
                <Popover
                  id="simple-popper"
                  open={open}
                  anchorEl={anchorEl}
                  onClose={this.handleAccountClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                >
                  <Paper elevation={10} className={classes.userPopOverContainer}>
                    <Button href="edit-upvotes" color="inherit" className={classes.editUpvotesButton}>
                      <span>Edit Upvotes</span>
                    </Button>
                    <Button color="inherit" className={classes.logoutButton} onClick={logout}>
                      <span><i className="fa fa-external-link mr-2 text-red icon-danger"></i>Logout</span>
                    </Button>
                  </Paper>
                </Popover>
              </div>}
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }
}

export default withStyles(styles)(NavBar);


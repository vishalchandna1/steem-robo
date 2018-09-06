import React, { Component } from 'react';
import SteemConnectLogin from '../../atoms/SteemConnectLogin/SteemConnectLogin';
import * as securityImage from '../../../assets/images/security.jpg';
import * as openSource from '../../../assets/images/open_source.png';
import * as robot from '../../../assets/images/robot.jpg';
import * as mutualBenefits from '../../../assets/images/mutual_benefits.jpg';
import './HomeContent.css';
import Button from '../../atoms/Button/Button';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import PublicIcon from '@material-ui/icons/Public';

class HomeContent extends Component {
  render() {
    const { loginUrl } = this.props;
    return(
      <div className="HomeContent">
        <div className="right-image-left-content">
          <div className="left-content">
            <span className="heading">
              Let's help each other out
            </span>
            <span className="text-content">
              Steemrobo is a automated system designed in a way to help out the people in need. All the users of the platform are mututally benefitted. Is it free? Yes, totally!
              All you have to do is contrubute to the upvotes. Don't forget to check out 
              <div className="text-center mt-5">
                <Button href={"/how-it-works"} size="medium" color="primary">
                  How it works?
                </Button>
              </div>
            </span>
          </div>
          <div className="right-content">
            <Paper elevation={7}>
              <img src={mutualBenefits} alt="Help each other"/>
            </Paper>
          </div>
        </div>

        <div className="left-image-right-content">
          <div className="left-content">
            <Paper elevation={7}>
              <img src={securityImage} alt="Steem Connect OAuth 2.0"/>
            </Paper>
          </div>
          <div className="right-content">
            <span className="heading">
              Steem Connect OAuth 2.0
            </span>
            <span className="text-content">
              SteemConnect OAuth 2.0 has become the standard for the 3rd-party apps. Steemrobo also uses it to authenticate the users with an access of mainly "vote".
              The platform is super secured as no Access Token is stored.
              <div className="text-center mt-5">
                <Button href={"https://steemconnect.com/"} size="medium" color="primary">
                  Learn more about SteemConnect
                </Button>
              </div>
            </span>
          </div>
        </div>

        <div className="right-image-left-content">
          <div className="left-content">
            <span className="heading">
              Curation rewards are never missed.
            </span>
            <span className="text-content">
              Steemrobo becomes very powerful when it comes to redeem your curation rewards. It doesn't matter if you are offline or inactive on Steemit, Steemrobo will
               make sure that you receive your curation rewards and will make it even better.
              <div className="text-center mt-5">
                <Button href={"https://google.com"} size="medium" color="primary">
                  How it works?
                </Button>
              </div>
            </span>
          </div>
          <div className="right-content">
            <Paper elevation={7}>
              <img src={robot} alt="Curation Rewards"/>
            </Paper>
          </div>
        </div>
        <div className="left-image-right-content">
          <div className="left-content">
            <Paper elevation={7}>
              <img src={openSource} alt="Open Source"/>
            </Paper>
          </div>
          <div className="right-content">
            <span className="heading">
              Open Source <PublicIcon> </PublicIcon>
            </span>
            <span className="text-content">
              Steemrobo is completely open source so you can always check what is happening inside the code. Most importantly our algorithm which we are using
              to automate the upvotes is also there if you want build your own STEEM app or improve the code.
              <div className="text-center mt-4">
                <Button href={"https://steemconnect.com/"} size="medium" color="primary" className="mt-3">
                  Front-End Code <h2><i className="fa fa-github ml-2 mt-2"></i></h2>
                </Button>
                <Button href={"https://steemconnect.com/"} size="medium" color="primary" className="mt-3">
                  Back-End Code<i className="fa fa-github ml-2"></i>
                </Button>
              </div>
            </span>
          </div>
        </div>

        <div className="start-your-journey">
          <span className="text">
            Start your jouney with Steemrobo 
          </span>
          <div className="link-container">
            Continue to <SteemConnectLogin url={loginUrl}/>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeContent;

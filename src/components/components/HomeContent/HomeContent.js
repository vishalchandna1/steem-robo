import React, { Component } from 'react';
import SteemConnectLogin from '../../atoms/SteemConnectLogin/SteemConnectLogin';
import Swiper from 'react-id-swiper';
import 'swiper/dist/css/swiper.css';
import * as securityImage from '../../../assets/images/security.jpg';
import * as openSource from '../../../assets/images/open_source.jpg';
import * as automated from '../../../assets/images/automated.jpg';
import * as mutualBenefits from '../../../assets/images/mutual_benefits.jpg';
import './HomeContent.css';
import Button from '../../atoms/Button/Button';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';


class HomeContent extends Component {
  constructor(props) {
    super(props)
    this.goNext = this.goNext.bind(this)
    this.goPrev = this.goPrev.bind(this)
    this.swiper = null
  }
  goNext() {
    if (this.swiper) this.swiper.slideNext()
  }

  goPrev() {
    if (this.swiper) this.swiper.slidePrev()
  }

  render() {
    const params = {
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    }
    return(
      <div className="HomeContent">
        {/*<Swiper {...params} ref={node => {if(node) this.swiper = node.swiper} }>
          <div className="slide-item-wrapper">
            <img src={mutualBenefits}/>
            <span className="text">Let's help each other</span>
          </div>
          <div className="slide-item-wrapper">
            <img src={securityImage}/>
            <span className="text">SteemConnect OAuth 2.0</span>
          </div>
          <div className="slide-item-wrapper">
            <img src={openSource}/>
            <span className="text"><Link to="/code">Open Source</Link></span>
          </div>
        </Swiper>*/}
        <div className="right-image-left-content">
          <div className="left-content">
            <span className="heading">
              Let's help each other out
            </span>
            <span className="text-content">
              Steemrobo is a automated system designed in a way to help out the people in need. All the users of the platform are mututally benefitted. Is it free? Yes, totally!
              All you have to do is contrubute to the upvotes. Don't forget to check out 
              <div className="text-center">
                <Button href={"https://google.com"} size="medium" color="primary">
                  How it works?
                </Button>
              </div>
            </span>
          </div>
          <div className="right-content">
            <Paper elevation={5}>
              <img src={mutualBenefits} />
            </Paper>
          </div>
        </div>

        <div className="left-image-right-content">
          <div className="left-content">
            <Paper elevation={5}>
              <img src={mutualBenefits} />
            </Paper>
          </div>
          <div className="right-content">
            <span className="heading">
              Let's help each other out
            </span>
            <span className="text-content">
              Steemrobo is a automated system designed in a way to help out the people in need. All the users of the platform are mututally benefitted. Is it free? Yes, totally!
              All you have to do is contrubute to the upvotes. Don't forget to check out 
              <div className="text-center">
                <Button href={"https://google.com"} size="medium" color="primary">
                  How it works?
                </Button>
              </div>
            </span>
          </div>
        </div>

        <div className="right-image-left-content">
          <div className="left-content">
            <span className="heading">
              Let's help each other out
            </span>
            <span className="text-content">
              Steemrobo is a automated system designed in a way to help out the people in need. All the users of the platform are mututally benefitted. Is it free? Yes, totally!
              All you have to do is contrubute to the upvotes. Don't forget to check out 
              <div className="text-center">
                <Button href={"https://google.com"} size="medium" color="primary">
                  How it works?
                </Button>
              </div>
            </span>
          </div>
          <div className="right-content">
            <Paper elevation={5}>
              <img src={mutualBenefits} />
            </Paper>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeContent;

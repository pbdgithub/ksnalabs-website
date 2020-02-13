import React, { Component } from 'react';
import Plx from 'react-plx';
import CSSModules from 'react-css-modules';
// components
import Header from '../../components/header';
import Footer from '../../components/footer';
// styles
import styles from './home.scss';
// images
import caretIcon from '../../../assets/images/caret_down.svg';
import bg_image from '../../../assets/images/home_bg.png';

class HomeComponent extends Component {

  render(props) {
    const {
      mainItem,
      firstItem,
      secondItem,
      thirdItem,
      fourthItem,
      footerItem
    } = this.props.config;

    return (
      <div styleName="home-container">
        <Header />  
        <div styleName="main-item">
          <img src={bg_image} styleName="responsive" />
          <div styleName="background-layer">
            <div styleName="anim-content">
              <div styleName="text-anim">
                <div styleName="text-anim-content">
                  <span>The right team for your</span>
                  <ul styleName="text-anim-list">
                    <li styleName="text-anim-list-item">application development</li>
                    <li styleName="text-anim-list-item">end-to-end solutions</li>
                    <li styleName="text-anim-list-item">digital solutions</li>
                    <li styleName="text-anim-list-item">devops solutions</li>
                  </ul>
                </div>

                <div styleName="main-item-description">
                  KSNALabs is an IT solutions company helping businesses re-engineer themselves through powerful digital platforms and emerging technologies.
                </div>
                { /*
                <div styleName="get-started-btn">Get Started</div>
                */}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
};

export default CSSModules(HomeComponent, styles);

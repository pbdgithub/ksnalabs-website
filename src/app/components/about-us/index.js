import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './about.scss';
import Footer from '../../components/footer';
import Header from '../../components/header';

class AboutComponent extends Component {
  render() {
    return (
      <div styleName="main-item">
        <Header />
        <div styleName="page-container">
          <div styleName="page-header">
            <div styleName="page-header-container">
              <div styleName="page-header-heading">
                <span>About Us</span>
              </div>
              <div styleName="page-header-desc">
                We provide quality services to launch your startup or grow your business
              </div>
            </div>
          </div>
          <div styleName="sub-item-two">
            <div styleName="left-head">
              <p styleName="left-head-first">Our Core</p>
              <p styleName="left-head-second">Values</p>
            </div>
            <div styleName="right-desc">
              KSNALabs builds better, bolder products and services by applying the right mix of people,
              process and textnology. We are expert in planning, enginnering and optimizing digital products
              and platforms that help companies disrupt and dominate their indestries.
              Our team have been tapped by some of the world's most admired companies to build solutions no one else can.
            </div>
          </div>
          <div styleName="sub-item-three">
            <div styleName="items">
              <div styleName="item">
                <img src="./trust.jpg" alt="trust" />
              </div>
              <div styleName="item-head">Trust</div>
              <div styleName="item-desc">
                KSNALabs builds better, bolder products and services by applying the right mix of people,
                process and textnology. We are expert in planning, enginnering
              </div>
            </div>
            <div styleName="items">
              <div styleName="item">
                <img src="./trust.jpg" alt="trust" />
              </div>
              <div styleName="item-head">Process and Develop</div>
              <div styleName="item-desc">
                KSNALabs builds better, bolder products and services by applying the right mix of people,
                process and textnology. We are expert in planning, enginnering
              </div>
            </div>
            <div styleName="items">
              <div styleName="item">
                <img src="./trust.jpg" alt="trust" />
              </div>
              <div styleName="item-head">Final Product</div>
              <div styleName="item-desc">
                KSNALabs builds better, bolder products and services by applying the right mix of people,
                process and textnology. We are expert in planning, enginnering
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
};

export default CSSModules(AboutComponent, styles);
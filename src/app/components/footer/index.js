import React from 'react';
import { Link } from "react-router-dom";
import CSSModules from 'react-css-modules';
// styles
import styles from './footer.scss';
// images
import fbIcon from '../../../assets/images/fb-icon.png';
import linkedInIcon from '../../../assets/images/linkedin-icon.png';
import twitterIcon from '../../../assets/images/twitter-icon.png';
import servicesIcon from '../../../assets/images/services-icon.png';
import contactUsIcon from '../../../assets/images/contact-us-icon.png';
import phoneIcon from '../../../assets/images/phone-icon.png';
import mailIcon from '../../../assets/images/mail-bulk-icon.png';

const servicesItems = [
  'Mobile development',
  'Web app development',
  'DevOps engineering',
  'AI/Machine learning',
  'Cloud computing'
];

const Footer = () => (
  <div styleName="footer">
    <div styleName="footer-main">
      <div styleName="footer-logo-icons-cotainer">
        <div styleName="logo"><span styleName="header-logo-text-1">KSNA</span>Labs</div>
        <div styleName="footer-icons">
          <img src={fbIcon} alt="Facebook" styleName="footer-icon-img" />
          <img src={linkedInIcon} alt="LinkedIn" styleName="footer-icon-img" />
          <img src={twitterIcon} alt="Twitter" styleName="footer-icon-img" />
        </div>
      </div>

      <div styleName="footer-services">
        <div styleName="footer-heading-text">
          <span>Our Services</span>
          <img src={servicesIcon} alt="" />
        </div>
        <div styleName="footer-services-container">
          {
            servicesItems.map((item) => <div key={item} styleName="footer-services-item">{item}</div>)
          }
        </div>
      </div>

      <div styleName="footer-contact-us">
        <div styleName="footer-heading-text">
          <span>Contact us</span>
          <img src={contactUsIcon} alt="" />
        </div>
        <div styleName="footer-contact-us-container">
          <div styleName="footer-contact-us-item">
            <img src={phoneIcon} alt="Phone" />
            <span>+91-80-48663918</span>
          </div>
         <div styleName="footer-contact-us-item">
          <img src={phoneIcon} alt="mobile" />
          <span>+91-7483752751</span>
          </div>
          <div styleName="footer-contact-us-item">
            <img src={mailIcon} alt="Mail" />
            <span>info@ksnalabs.com</span>
          </div>
        </div>
      </div>

      <div styleName="footer-address">
        <div styleName="footer-heading-text">
          <span>Locate Us</span>
        </div>
        <div styleName="footer-address-container">
          <div styleName="footer-address-item">
            <span>B-108, SV Heights, Hopefarm,</span>
            <span>Whitefield, Bangalore-66, Karnataka</span>
          </div>
        </div>
      </div>
    </div>

    <div styleName="footnote">
      Made in India &middot; Copyright 2018 &middot; All rights reserved
    </div>
  </div>
);

export default CSSModules(Footer, styles);
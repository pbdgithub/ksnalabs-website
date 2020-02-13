import React, { Component } from 'react';
import cssModules from 'react-css-modules';
import Footer from '../../components/footer';
import styles from './contact.scss';

import caretIcon from '../../../assets/images/caret_down.svg';
import downIcon from '../../../assets/images/down_arrow.svg';
import bg_image from '../../../assets/images/contact_us_bg.jpg';

class ContactComponent extends Component {
  render () {
    return (
      <div styleName="main-item">
        <img src={bg_image} styleName="contact-image"/>
        <div styleName="background-layer">
          <div styleName="contactText">
            <h2>Contact Us</h2>
            <p>KSNALabs is here to provide you with more information, answer any questions you may have
             and create and have an efective solution for your instructional needs</p>
          </div>          
          <div styleName="downArrow"><span>Use our chat window to drop us an email with your request details</span><img src={downIcon} /></div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default cssModules(ContactComponent, styles);
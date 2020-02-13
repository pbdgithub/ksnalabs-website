import React from 'react';
import { Link } from 'react-router-dom';
import CSSModules from 'react-css-modules';
// styles
import styles from './header.scss';

const Header = () => (
  <div styleName="header">
    <div styleName="logo"><span styleName="header-logo-text-1">KSNA</span>Labs</div>
    <div styleName="headerLinkContainer">
      <Link to="/" styleName="headerLink">Home</Link>
      <Link to="/about" styleName="headerLink">About Us</Link>
      <Link to="/services" styleName="headerLink">Services</Link>
      <Link to="/contact" styleName="headerLink">Contact</Link>
    </div>
  </div>
);

export default CSSModules(Header, styles);
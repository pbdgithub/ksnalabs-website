import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
// components
import Header from '../../components/header';
import Footer from '../../components/footer';
// styles
import styles from './services.scss';
import * as data from './../../constants';
import Services from '../../containers/ServicesPage';

class ServicesComponent extends Component {

  constructor (props) {
    super(props);
  }

  render(props) {
    const { services } = this.props;
    return (
      <div styleName="services-container">
        <Header />

        <div styleName="page-container">
          <div styleName="page-header">
            <div styleName="page-header-container">
              <div styleName="page-header-heading">
                <span>Our Services</span>
              </div>
              <div styleName="page-header-desc">
                We provide quality services to launch your startup or grow your business
              </div>
            </div>
          </div>

          <div styleName="services-content">
            <div styleName="services-main-item">
              <div>
                {
                  services.map((service) => {
                    return (
                      <div></div>
                    );
                  })
                }
              </div>
              <div>
                {
                  services.map((service) => {
                    return (
                      <div></div>
                    );
                  })
                }
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
};

export default CSSModules(ServicesComponent, styles);
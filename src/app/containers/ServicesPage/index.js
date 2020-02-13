import React, { Component } from 'react';
// components
import ServicesComponent from '../../components/services';

class Services extends Component {

  constructor (props) {
    super(props);

    this.services = [
      {
        name: 'Mobile Application',
        desc: 'iOS, Android, Hybrid, React Native'
      },
      {
        name: 'Web Application',
        desc: 'Angular, ReactJS, NodeJS'
      },
      {
        name: 'DevOps Engineering',
        desc: 'Continuous integration / Continuous deployment'
      },
      {
        name: 'AI / Machine Learning',
        desc: 'Tensorflow using google apps'
      }
    ]
  }

  render() {
    return (
      <ServicesComponent services={this.services}/>
    );
  }
};

export default Services;
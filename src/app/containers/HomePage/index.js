import React, { Component } from 'react';

import HomeComponent from '../../components/home';

class Home extends Component {
  constructor (props) {
    super(props);

    this.getCurrentPos = (elemSelector) => {
      const elem = document.getElementsById(elemSelector);
      const bounds = elem.getBoundingClientRect();
      console.log(bounds.left);
      console.log(bounds.top);
      return {
        x: bounds.left,
        y: bounds.top
      }
    };

    this.config = {
      mainItem: [
        {
          start: 0,
          end: 500,
          properties: [
            {
              startValue: 1,
              endValue: 0,
              property: 'opacity'
            }
          ]
        }
      ],
      firstItem: [
        {
          start: 500,
          end: 1000,
          properties: [
            {
              startValue: 1,
              endValue: 0,
              property: 'opacity'
            }
          ]
        }
      ],
      secondItem: [
        {
          start: 1000,
          end: 1500,
          properties: [
            {
              startValue: 1,
              endValue: 0,
              property: 'opacity'
            }
          ]
        }
      ],
      thirdItem: [
        {
          start: 1500,
          end: 2000,
          properties: [
            {
              startValue: 1,
              endValue: 0,
              property: 'opacity'
            }
          ]
        }
      ],
      fourthItem: [
        {
          start: 2000,
          end: 2300,
          properties: [
            {
              startValue: 0,
              endValue: 1,
              property: 'opacity'
            }
          ]
        },
        {
          start: 2200,
          end: 2300,
          properties: [
            {
              startValue: 0,
              endValue: 1,
              property: 'opacity'
            }
          ]
        }
      ]
    };
  }

  render() {
    return (
      <HomeComponent config={this.config} />
    );
  }
};

export default Home;
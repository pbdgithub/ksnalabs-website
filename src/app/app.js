import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import styles from './app.scss';

import HomePage from './containers/HomePage';
import AboutPage from './containers/AboutPage';
import ServicesPage from './containers/ServicesPage';
import ContactPage from './containers/ContactPage';

import Header from './components/header';

class App extends Component {

  constructor() {
    super();
    if (process.env.NODE_ENV !== 'production') {
      console.log('You are running the application in development mode');
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className={styles.app}>
          { <Header /> }
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/services" component={ServicesPage} />
            <Route exact path="/contact" component={ContactPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default hot(module)(App);

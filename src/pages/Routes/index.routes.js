import React, { Component } from 'react';
import { Switch, Router } from 'react-router-dom';
import Login from '../Login';
import Wallet from '../Wallet';
import NotFound from '../NotFound';

export default class Routes extends Component {
  render() {
    return (

      <Switch>
        <Router path="/" component={ Login } />
        <Router path="/wallet" component={ Wallet } />
        <Router path="*" component={ NotFound } />
      </Switch>

    );
  }
}

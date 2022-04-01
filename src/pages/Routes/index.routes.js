import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../Login';
import Wallet from '../Wallet';
import NotFound from '../NotFound';

export default class Routes extends Component {
  render() {
    return (

      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/carteira" component={ Wallet } />
        <Route path="*" component={ NotFound } />
      </Switch>

    );
  }
}

import React from 'react';
import { HashRouter, Route, Switch, hashHistory } from 'react-router-dom';
import Home from '../home';
import Detail from '../detail';

const BasicRoute = () => (
  <HashRouter history={hashHistory}>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/detail" component={Detail}></Route>
    </Switch>
  </HashRouter>
);

export default BasicRoute;

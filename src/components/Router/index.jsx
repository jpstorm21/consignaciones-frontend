import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AuthenticatedRouter from './AuthenticatedRouter';
import { Login } from '../../views';

const Router = () => {
  return (
    <Switch>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/">
        <AuthenticatedRouter />
      </Route>
    </Switch>
  );
};

export default Router;

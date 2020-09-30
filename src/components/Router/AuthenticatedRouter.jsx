import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { SessionContext } from '../../stores';
import { Dashboard, Error404 } from '../../views';

const AuthenticatedRouter = () => {
  const { isAuthenticated } = useContext(SessionContext);

  if (!isAuthenticated) return <Redirect to="/login" />;

  return (
    <Switch>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/" exact>
        <Redirect to="/dashboard" />
      </Route>
      <Route path="*">
        <Error404 />
      </Route>
    </Switch>
  );
};

export default AuthenticatedRouter;

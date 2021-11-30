/**
 *
 * DashboardPage
 *
 */
import React from 'react';
import { HomePage } from 'app/pages/HomePage/Loadable';
import { memo } from 'react';
import { Route, Switch } from 'react-router';
import { PrivateRoute } from 'app/components/PrivateRoute/Loadable';
import { NotFoundPage } from 'app/components/NotFoundPage/Loadable';

interface Props {}

export const DashboardPage = memo((props: Props) => {
  return (
    <Switch>
      <PrivateRoute exact path="/home" component={HomePage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
});

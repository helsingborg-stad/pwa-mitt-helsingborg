/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { PropTypes } from 'prop-types';

/**
 * Render a route with potential sub routes
 * https://reacttraining.com/react-router/web/example/route-config
 */
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => <route.component {...props} routes={route.routes} />}
    />
  );
}

/**
 * Use this component for any new section of routes (any config object that has a "routes" property
 */
export function RenderRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={route.key} {...route} />
      ))}
      {/* TODO: Add 404 Page for non matching routes */}
      <Route component={() => <h1>Not Found!</h1>} />
    </Switch>
  );
}

RenderRoutes.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

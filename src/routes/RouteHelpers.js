/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const PrivateRoute = ({ route, ...rest }) => {
  // TODO: Implement check towards localstorage token.
  const isLoggedin = true;
  return (
    <Route
      {...rest}
      render={props =>
        isLoggedin ? (
          <route.component {...props} routes={route.routes} />
        ) : (
          <Redirect to={{ pathname: `/${route.redirectTo}` }} />
        )}
    />
  );
};

const PublicRoute = ({ route, ...rest }) => (
  <Route {...rest} render={props => <route.component {...props} routes={route.routes} />} />
);

/**
 * Render a route with potential sub routes
 * https://reacttraining.com/react-router/web/example/route-config
 */
function RouteWithSubRoutes(route) {
  const { path, exact, private: privateRoute } = route;
  const RouteComponent = privateRoute ? PrivateRoute : PublicRoute;

  return <RouteComponent path={path} exact={exact} route={route} />;
}

/**
 * Use this component for any new section of routes (any config object that has a "routes" property
 */
export const RenderRoutes = ({ routes, ...rest }) => (
  <Switch>
    {routes.map((route, i) => (
      <RouteWithSubRoutes key={route.key} {...route} {...rest} />
    ))}
    {/* TODO: Add 404 Page for non matching routes */}
    <Route component={() => <h1>Not Found!</h1>} />
  </Switch>
);

RenderRoutes.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

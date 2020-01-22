import React from "react";
import { RenderRoutes } from "./RouteHelpers";

// TODO: REPLACE DATA WITH REAL ROUTES
const ROUTES = [
  { path: "/", key: "ROOT", exact: true, component: () => <h1>Index</h1> },
  {
    path: "/app",
    key: "APP",
    component: RenderRoutes,
    routes: [
      {
        path: "/app",
        key: "APP_ROOT",
        exact: true,
        component: () => <h1>App Index</h1>
      },
      {
        path: "/app/page",
        key: "APP_PAGE",
        exact: true,
        component: () => <h1>App Page</h1>
      }
    ]
  }
];

export default ROUTES;

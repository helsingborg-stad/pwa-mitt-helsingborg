import React from 'react';
import { RenderRoutes } from './RouteHelpers';
import LoginScreen from '../components/screens/Login';
// TODO: Use Chat Screen Component instead of h1
const ROUTES = [
  {
    path: '/',
    key: 'ROOT',
    exact: true,
    component: LoginScreen,
  },
  {
    path: '/chat',
    key: 'Chat',
    private: true,
    redirectTo: '',
    component: () => <h1>Chat Screen</h1>,
  },
];

export default ROUTES;

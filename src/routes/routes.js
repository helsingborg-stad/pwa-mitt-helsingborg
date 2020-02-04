import React from 'react';
import { RenderRoutes } from './RouteHelpers';
import LoginScreen from '../components/screens/Login';
import ChatScreen from '../components/screens/ChatScreen';
import SplashScreen from '../components/screens/SplashScreen';
// TODO: Use Chat Screen Component instead of h1
const ROUTES = [
  {
    path: '/',
    key: 'ROOT',
    exact: true,
    component: SplashScreen,
  },
  {
    path: '/login',
    key: 'Login',
    exact: true,
    component: LoginScreen,
  },
  {
    path: '/chat',
    key: 'Chat',
    private: true,
    redirectTo: '',
    component: ChatScreen,
  },
];

export default ROUTES;

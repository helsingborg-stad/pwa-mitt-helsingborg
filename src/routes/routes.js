import React from 'react';
import { Link } from 'react-router-dom';
import LoginScreen from '../components/screens/Login';
import ChatScreen from '../components/screens/ChatScreen';
import SplashScreen from '../components/screens/SplashScreen';
import ScreenTabWrapper from '../components/screens/ScreenTabWrapper';
import TaskScreen from '../components/screens/Task/TaskScreen';
import ProfileScreen from '../components/screens/ProfileScreen';

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
    path: '/tasks/:id',
    key: 'TASK',
    redirectTo: '/',
    private: true,
    component: () => <Link to="/main/tasks">Task Screen</Link>,
  },
  {
    path: '/main',
    key: 'MAIN',
    private: true,
    component: ScreenTabWrapper,
    routes: [
      {
        path: '/main/chat',
        key: 'CHAT',
        private: true,
        redirectTo: '/',
        component: ChatScreen,
        tab: {
          icon: 'message',
          text: 'Chatta',
        },
      },
      {
        path: '/main/tasks',
        key: 'TASKS',
        private: true,
        redirectTo: '/',
        component: TaskScreen,
        tab: {
          icon: 'home',
          text: 'Ärenden',
        },
      },
      {
        path: '/main/profile',
        key: 'PROFILE',
        private: true,
        redirectTo: '/',
        component: ProfileScreen,
        tab: {
          icon: 'contacts',
          text: 'Dina sidor',
        },
      },
    ],
  },
];

export default ROUTES;

import React from 'react';
import StoryWrapper from '../../molecules/StoryWrapper';
import SplashScreen from './SplashScreen';

export default {
  component: SplashScreen,
  title: 'Splash Screen',
};

export const Login = () => (
  <StoryWrapper>
    <SplashScreen />
  </StoryWrapper>
);

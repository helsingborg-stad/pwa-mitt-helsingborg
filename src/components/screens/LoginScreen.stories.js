import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryWrapper from '../molecules/StoryWrapper';
import LoginScreen from './LoginScreen';

storiesOf('Screens', module).add('Login', () => (
  <StoryWrapper>
    <LoginScreen />
  </StoryWrapper>
));

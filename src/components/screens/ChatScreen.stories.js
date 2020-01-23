import React from 'react';
import StoryWrapper from '../molecules/StoryWrapper';
import ChatScreen from './ChatScreen';

export default {
  component: ChatScreen,
  title: 'ChatScreen',
};

export const Default = () => (
  <StoryWrapper>
    <ChatScreen />
  </StoryWrapper>
);

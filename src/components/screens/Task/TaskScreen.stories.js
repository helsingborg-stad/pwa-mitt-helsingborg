import React from 'react';
import TaskScreen from './TaskScreen';
import StoryWrapper from '../../molecules/StoryWrapper';

export default {
  component: TaskScreen,
  title: 'TaskScreen',
};

export const defaultTaskScreen = () => (
  <StoryWrapper>
    <TaskScreen />
  </StoryWrapper>
);

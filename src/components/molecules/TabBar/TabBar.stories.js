import React from 'react';
import StoryWrapper from '../StoryWrapper';
import TabBar from './TabBar';
import TabBarNavigation from './TabBarNavigation';

export default {
  component: TabBar,
  title: 'TabBar',
};

export const Default = () => (
  <StoryWrapper>
    <TabBarNavigation />
  </StoryWrapper>
);

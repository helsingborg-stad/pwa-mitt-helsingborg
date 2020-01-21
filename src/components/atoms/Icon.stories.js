import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';
import { IconContext } from 'react-icons';
import StoryWrapper from '../molecules/StoryWrapper';
import Icon from './Icon';

storiesOf('Icon', module).add('Material', () => (
  <StoryWrapper>
    <IconContext.Provider value={{ color: '#000000', size: '48', className: 'global-class-name' }}>
      <Icon size={48} name="Md3DRotation" />
    </IconContext.Provider>
  </StoryWrapper>
));

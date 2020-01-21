import React from 'react';
// import env from 'react-native-config';
import styled from 'styled-components';

import withChatForm from './withChatForm';
import Chat from './Chat';

import StoryWrapper from '../molecules/StoryWrapper';
import InputForm from '../molecules/InputForm';

import ParrotAgent from './ParrotAgent';

const ModifiedStoryWrapper = styled(StoryWrapper)`
  padding-left: 0;
  padding-right: 0;
`;

storiesOf('Chat', module).add('Watson agent', () => (
  <ModifiedStoryWrapper>
    <Chat ChatAgent={ParrotAgent} ChatUserInput={withChatForm(InputForm)} />
  </ModifiedStoryWrapper>
));

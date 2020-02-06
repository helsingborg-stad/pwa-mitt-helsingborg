import React from 'react';

import StoryWrapper from '../../molecules/StoryWrapper';
import Resource from './Resource';
import { COMPLETED_FORMS_KEY } from '../../../services/StorageService';

export default {
  title: 'Resource',
  component: Resource,
};

export const Default = () => (
  <StoryWrapper>
    <Resource
      storageKeys={[COMPLETED_FORMS_KEY]}
      render={data => <div> Im rendering through a prop {console.log(data)} </div>}
    />
  </StoryWrapper>
);

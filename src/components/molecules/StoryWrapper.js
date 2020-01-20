import React from 'react'
import ScreenWrapper from './ScreenWrapper';
import styled from 'styled-components';

const StoryWrapper = props => (
    <EnhancedSafeAreaView>
        <ModifiedScreenWrapper style={props.style}>
            {props.kind ?
                <StoryHeading>{`${props.kind} / ${props.name}`}</StoryHeading>
            : null}
            {props.children}
        </ModifiedScreenWrapper>
    </EnhancedSafeAreaView>
);

const StoryHeading = styled.h2`
    margin-bottom: 16px;
    margin-top: 16px;
`;

const EnhancedSafeAreaView = styled.div`
    flex: 1;
    margin-bottom: 18px;
`;

const ModifiedScreenWrapper = styled(ScreenWrapper)`
   justify-content: flex-start;
`;

export default StoryWrapper;

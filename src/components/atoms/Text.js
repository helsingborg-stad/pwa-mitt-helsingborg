import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    font-family: Roboto;
    color: ${props => (props.theme.text.default)};
    ${({ small }) => small && `
      font-size: 12px;
    `}
    ${({ strong }) => strong && `
      font-weight: 900;
    `}
`;
// flexShrink: 1; // from native

export default Text;

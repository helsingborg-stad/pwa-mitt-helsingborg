import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';

const Container = styled.div`
  flex: 1;
  padding: 16px;
`;

const ScreenWrapper = props => (
  <ThemeProvider theme={theme}>
    <Container style={props.style}>{props.children}</Container>
  </ThemeProvider>
);

export default ScreenWrapper;

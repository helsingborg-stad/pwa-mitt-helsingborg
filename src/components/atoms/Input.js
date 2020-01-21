// import { TextInput } from 'react-native';
import React from 'react';
import styled, { css } from 'styled-components';
import { PropTypes } from 'prop-types';

const input = css`
  background-color: ${({ theme }) => theme.input.background};
  border: solid 1px ${({ theme }) => theme.input.border};
  border-radius: 17px;
  ${({ center }) => center && 'text-align: center;'}
  font-size: 16px;
  padding: 14px;
  width: 100%;
`;

const TextInput = () => <input type="text" />;

const Input = styled(TextInput)`
  ${input}
`;

Input.propTypes = {
  theme: PropTypes.object,
};

Input.defaultProps = {
  theme: {
    input: {
      background: '#ffffff',
      border: '#e5e5e5',
    },
  },
};

export default Input;
export { input };

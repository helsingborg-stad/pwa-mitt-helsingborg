// import { TextInput } from 'react-native';
import React from 'react';
import styled, { css } from 'styled-components';
import { PropTypes } from 'prop-types';

const input = css`
  background-color: ${({ theme }) => theme.input.background};
  border: solid 1px ${({ theme }) => theme.input.border};
  border-radius: 17px;

  ${({ center }) => center && 'text-align: center;'}
  font-size: 14px;
  padding: 14px;
  width: 100%;
  transition: all 0.2s ease-in;
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.input.borderFocus};
  }
  -webkit-appearance: none;

  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.input.placeholder};
  }
  ::-moz-placeholder {
    color: ${({ theme }) => theme.input.placeholder};
  }
  :-ms-input-placeholder {
    color: ${({ theme }) => theme.input.placeholder};
  }
  :-moz-placeholder {
    color: ${({ theme }) => theme.input.placeholder};
  }
`;

const Input = styled.input`
  ${input}
`;

Input.propTypes = {
  type: PropTypes.string,
  theme: PropTypes.object,
};

Input.defaultProps = {
  type: 'text',
  theme: {
    input: {
      background: '#ffffff',
      border: '#e5e5e5',
      borderFocus: '#000',
    },
  },
};

Input.css = input;

export default Input;

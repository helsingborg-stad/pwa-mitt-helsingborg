// import { TextInput } from 'react-native';
import styled, { css } from 'styled-components';

const input = css`
  background-color: ${({ theme }) => theme.input.background};
  border: solid 1px ${({ theme }) => theme.input.border};
  border-radius: 17px;
  ${({ center }) => center && 'text-align: center;'}
  font-size: 16px;
  padding: 14px;
  width: 100%;
`;

const Input = styled.input`
  ${input}
`;

Input.propTypes = {};

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

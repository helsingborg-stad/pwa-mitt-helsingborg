// import { TextInput } from 'react-native';
import styled, { css } from 'styled-components';

const input = css`
  width: 100%;
  background-color: ${({ theme }) => theme.input.background};
  border-radius: 17.5px;
  border: solid 1px ${({ theme }) => theme.input.border};
  padding: 16px;
  ${({ center }) => center && 'text-align: center;'}
`;

const Input = styled(TextInput)`
  ${input}
`;

Input.propTypes = {};

Input.defaultProps = {
  theme: {
    input: {
      background: '#fff',
      border: '#e5e5e5',
    },
  },
};

export default Input;
export { input };

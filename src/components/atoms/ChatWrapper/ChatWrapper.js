import styled from 'styled-components';

const ChatWrapper = styled.div`
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  padding-bottom: 0;
  background-color: #f5f5f5;
`;

ChatWrapper.defaultProps = {
  behavior: 'padding',
  enabled: true,
};

export default ChatWrapper;

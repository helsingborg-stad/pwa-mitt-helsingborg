import styled from 'styled-components';

const ChatWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: stretch;
  padding-bottom: 0;
  background-color: #f5f5f5;
  overflow: hidden;
  height: 100%;
  position: relative;
`;

ChatWrapper.defaultProps = {
  behavior: 'padding',
  enabled: true,
};

export default ChatWrapper;

import styled from 'styled-components';

const ChatBody = styled.div`
  background-color: ${props => props.theme.chatBody.background};

  flex: 1 1 100%;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  z-index: 1;
`;

export default ChatBody;

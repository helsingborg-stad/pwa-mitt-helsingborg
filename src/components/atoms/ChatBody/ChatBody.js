import styled from 'styled-components';

const ChatBody = styled.div`
  height: 100%;
  flex: 1 1 100%
  position: relative;
  overflow: scroll;
  background-color: ${props => props.theme.chatBody.background};
`;

export default ChatBody;

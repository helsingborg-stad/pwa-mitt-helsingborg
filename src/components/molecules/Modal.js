import PropTypes from 'prop-types';
import React from 'react';
import ReactModal from 'react-modal';
import styled, { withTheme } from 'styled-components';
import Button from '../atoms/Button';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';

const ModalContainer = styled(ReactModal)`
  margin-left: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-top: 32px;
  border-top-left-radius: 17.5px;
  border-top-right-radius: 17.5px;
`;

const Header = styled.div`
  flex-direction: row;
  border: 1px solid ${props => props.theme.background.lighter};
  border-bottom-width: 2;
  border-top-left-radius: 17.5px;
  border-top-right-radius: 17.5px;
  background-color: white;
  padding: 16px 16px 12px 16px;
`;

const Flex = styled.div`
  flex: 1;
`;

const FlexInner = styled.div`
  flex: 3;
`;

const FlexOuter = styled.div`
  flex: 1;
  align-items: flex-end;
`;

const Title = styled(Heading)`
  text-align: center;
  color: ${props => props.theme.heading[props.color][1]};
`;

const Content = styled.div`
  background-color: ${props => props.theme.background.lightest};
`;

const ModalView = styled.div`
  padding: 32px 16px 32px 16px;
`;

const Modal = ({ visible, heading, content, changeModal, color }) => (
  <ModalContainer
    contentLabel={heading}
    isOpen={visible}
    onRequestClose={() => {
      changeModal(false);
    }}
  >
    <Flex>
      <Header>
        <FlexOuter></FlexOuter>
        <FlexInner>
          <Title type="h4" color={color}>
            {heading}
          </Title>
        </FlexInner>
        <FlexOuter>
          <Button
            onClick={() => {
              changeModal(!visible);
            }}
            underlayColor="white"
          >
            <Text>Klar</Text>
          </Button>
        </FlexOuter>
      </Header>
      <Content>
        <ModalView>
          <Text>{content}</Text>
        </ModalView>
      </Content>
    </Flex>
  </ModalContainer>
);

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  heading: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  changeModal: PropTypes.func.isRequired,
  color: PropTypes.oneOf(['blue', 'purple', 'red', 'green']),
};

Modal.defaultProps = {
  color: 'purple',
};

export default withTheme(Modal);

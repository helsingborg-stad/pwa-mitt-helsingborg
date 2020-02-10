import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ScreenWrapper from '../molecules/ScreenWrapper';
import { Heading, Button, Text } from '../atoms';
import Auth from '../../helpers/AuthHelper';
import StorageService from '../../services/StorageService';

const Container = styled.div`
  padding: 16px;
`;

const LogoutButton = styled(Button)`
  margin: 16px 0;
`;

const ProfileScreen = props => {
  /**
   * Log out user
   */
  const logOut = () => {
    const { history } = props;
    Auth.logOut();
    history.push('/login');
  };

  /**
   * Empty local storage data and redirect to root route
   */
  const clearData = () => {
    const { history } = props;
    StorageService.clearData();
    history.push('/');
  };

  return (
    <ScreenWrapper>
      <Container>
        <Heading>Profil</Heading>
        <LogoutButton block color="purple" onClick={() => logOut()}>
          <Text>Logga ut</Text>
        </LogoutButton>
        {process.env.REACT_APP_APP_ENV === 'development' && (
          <LogoutButton block onClick={() => clearData()}>
            <Text>Radera data</Text>
          </LogoutButton>
        )}
      </Container>
    </ScreenWrapper>
  );
};

ProfileScreen.propTypes = {
  history: PropTypes.object,
};

export default ProfileScreen;

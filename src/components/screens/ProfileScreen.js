import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ScreenWrapper from '../molecules/ScreenWrapper';
import { Heading, Button, Text } from '../atoms';
import { logOut } from '../../helpers/AuthHelper';
import StorageService from '../../services/StorageService';
import UserContext from '../../context/user-context';

const Container = styled.div`
  padding: 16px;
`;

const LogoutButton = styled(Button)`
  margin: 16px 0;
`;

const ProfileScreen = props => {
  const { setIsAuthenticated } = useContext(UserContext);

  /**
   * Log out user
   */
  const logOutUser = () => {
    const { history } = props;
    logOut();
    setIsAuthenticated(false);
    history.push('/login');
  };

  /**
   * Empty local storage data and redirect to root route
   */
  const resetData = () => {
    const { history } = props;
    StorageService.clearData();
    setIsAuthenticated(false);
    history.push('/');
  };

  return (
    <ScreenWrapper>
      <Container>
        <Heading>Profil</Heading>
        <LogoutButton block color="purple" onClick={() => logOutUser()}>
          <Text>Logga ut</Text>
        </LogoutButton>
        {process.env.REACT_APP_APP_ENV === 'development' && (
          <LogoutButton block onClick={() => resetData()}>
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

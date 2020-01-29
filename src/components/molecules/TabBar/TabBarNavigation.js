import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import Icon from '../../atoms/Icon';

const TabBarNavigation = props => {
  const { tabItems } = props;

  const tabItem = (tabIcon, tabText, onClick) => (
    <TabItem onClick={action(onClick)}>
      <Icon name={tabIcon} size={32} />
      <div>{tabText}</div>
    </TabItem>
  );

  const createTabNavigator = () => {
    const navBar = tabItems.map(item => tabItem(item.tabIcon, item.tabText));

    return <>{navBar}</>;
  };

  return (
    <TopNav>
      <Tab>{createTabNavigator()}</Tab>
    </TopNav>
  );
};

const TopNav = styled.div`
  overflow: hidden;
  background-color: #f8f8f8;
`;

const Tab = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const TabItem = styled.div`
  text-align: center;
  padding: 14px 16px;
  font-size: 10px;
  &:hover {
    background-color: #ddd;
    color: black;
  }
`;

TabBarNavigation.propTypes = {
  tabItems: PropTypes.arrayOf(PropTypes.object),
};

TabBarNavigation.defaultProps = {
  tabItems: [
    { tabIcon: 'message', tabText: 'Prata med oss', onClick: 'messageOnClick' },
    { tabIcon: 'home', tabText: 'Mitt HBG', onClick: 'homeOnClick' },
    { tabIcon: 'contacts', tabText: 'Profile', onClick: 'contactsOnClick' },
  ],
};

export default TabBarNavigation;

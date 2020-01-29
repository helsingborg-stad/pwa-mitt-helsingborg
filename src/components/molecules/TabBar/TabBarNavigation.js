import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import Icon from '../../atoms/Icon';

const TabBarNavigation = props => {
  const { tabItems } = props;

  return (
    <TopNav>
      <Tab>
        {tabItems.map(item => (
          <TabItem onClick={item.onClick}>
            <Icon name={item.tabIcon} size={32} />
            <div>{item.tabText}</div>
          </TabItem>
        ))}
      </Tab>
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

// TODO: Disable text selection highlighting.
const TabItem = styled.div`
  text-align: center;
  padding: 14px 16px;
  font-size: 10px;
  &:hover {
    background-color: #ddd;
    color: black;
  }
  div {
    user-select: none;
  }
`;

TabBarNavigation.propTypes = {
  tabItems: PropTypes.arrayOf(PropTypes.object),
};

TabBarNavigation.defaultProps = {
  tabItems: [
    { tabIcon: 'message', tabText: 'Prata med oss' },
    { tabIcon: 'home', tabText: 'Mitt HBG' },
    { tabIcon: 'contacts', tabText: 'Profile' },
  ],
};

export default TabBarNavigation;

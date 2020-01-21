import React from 'react';
import PropTypes from 'prop-types';
import { Md3DRotation } from 'react-icons/md';

// eslint-disable-next-line no-unused-vars
const Icon = ({ name, size }) => <Md3DRotation />;

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf([16, 24, 32, 48]).isRequired,
};

export default Icon;

import React from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import * as MIcons from 'react-icons/md';

const MIcon = ({ name, size }) => {
  if (name.startsWith('Md')) {
    // react-icon material name, nothing to do.
  } else {
    // Convert react material naming convention to react-icon (eg. arrow-upward -> MdArrowUpward).
    name = name
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');

    name = `Md${name}`;
  }

  const IconComponent = MIcons[name];

  return (
    <IconContext.Provider value={{ color: '#000000', size, className: 'react-icons' }}>
      <IconComponent />
    </IconContext.Provider>
  );
};

MIcon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf([16, 24, 32, 48]),
};

MIcon.defaultProps = {
  size: 24,
};

export default MIcon;

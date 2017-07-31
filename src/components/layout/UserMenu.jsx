import React from 'react';
import PropTypes from 'prop-types';
import Menu from 'grommet/components/Menu';

const UserMenu = (props) => {
  const createKeyedAnchorItem = (navItem, i) => {
    return (React.cloneElement(navItem, { key: `navItem-${i}` }));
  };

  return (
    <Menu className="user-menu" label={props.user.display_name}>
      {props.userMenuNavItems.map((navItem, i) => {
        return createKeyedAnchorItem(navItem, i);
      })}
    </Menu>
  );
};

UserMenu.propTypes = {
  user: PropTypes.shape({
    display_name: PropTypes.string
  }).isRequired,
  userMenuNavItems: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string
  ])).isRequired
};

export default UserMenu;

import React from 'react';
import PropTypes from 'prop-types';
import Menu from 'grommet/components/Menu';
import DownIcon from 'grommet/components/icons/base/Down';
import Anchor from 'grommet/components/Anchor';

const UserMenu = (props) => {
  const createKeyedAnchorItem = (navItem, i) => {
    return React.cloneElement(navItem, { key: `navItem-${i}` });
  };

  return (
    <Menu className="user-menu" label={props.user.display_name} icon={<DownIcon />} size="small">
      {props.userMenuNavItems.map((navItem, i) => {
        createKeyedAnchorItem(navItem, i);
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

import React from 'react';
import PropTypes from 'prop-types';
import Header from 'grommet/components/Header';
import Menu from 'grommet/components/Menu';
import { ZooniverseLogo } from 'zooniverse-react-components';

const ZooHeader = (props) => {
  return (
    <Header justify="between" className="site-header" direction="row" size="small" responsive={true}>
      <Menu align="center" direction="row" size="small" responsive={false} inline={true}>
        {props.logoHomeLink &&
          props.logoHomeLink}
        <ul className="site-header__nav-list">
          {props.mainHeaderNavList.map((navItem, i) =>
            <li key={`navItem-${i}`} className="site-header__nav-list-item">{navItem}</li>)}
        </ul>
      </Menu>
      {props.authContainer &&
        props.authContainer}
    </Header>
  );
};

ZooHeader.defaultProps = {
  authContainer: null,
  logoHomeLink: <ZooniverseLogo height="1.25em" width="1.25em" />,
  mainHeaderNavList: null
};

ZooHeader.propTypes = {
  authContainer: PropTypes.node,
  logoHomeLink: PropTypes.node.isRequired,
  mainHeaderNavList: PropTypes.arrayOf(PropTypes.node).isRequired
};

export default ZooHeader;

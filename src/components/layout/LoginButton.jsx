import React from 'react';
import PropTypes from 'prop-types';
import Button from 'grommet/components/Button';

const LoginButton = ({ className, label, login }) => {
  return (
    <Button type="button" className={className} onClick={login} label={label} plain={true} />
  );
};

LoginButton.defaultProps = {
  className: 'site-header__button--as-link',
  label: 'Sign in',
  login: () => {}
};

LoginButton.propTypes = {
  className: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  login: PropTypes.func.isRequired
};

export default LoginButton;

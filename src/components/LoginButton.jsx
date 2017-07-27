import React from 'react';
import PropTypes from 'prop-types';
import Button from 'grommet/components/Button';

const LoginButton = ({ label, login }) => {
  return (
    <Button type="button" className="site-header__button--as-link" onClick={login} label={label} plain={true} />
  );
};

LoginButton.defaultProps = {
  label: 'Sign in',
  login: () => {}
};

LoginButton.propTypes = {
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  login: PropTypes.func.isRequired
};

export default LoginButton;

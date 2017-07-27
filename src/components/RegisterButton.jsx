import React from 'react';
import PropTypes from 'prop-types';
import Button from 'grommet/components/Button';

const RegisterButton = ({ label, toggleForm }) => {
  return (
    <Button type="button" className="site-header__button--as-link" onClick={toggleForm} label={label} plain={true} />
  );
};

RegisterButton.defaultProps = {
  label: 'Register',
  toggleForm: () => {}
};

RegisterButton.propTypes = {
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  toggleForm: PropTypes.func.isRequired
};

export default RegisterButton;

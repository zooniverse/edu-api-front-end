import React from 'react';
import PropTypes from 'prop-types';
import Button from 'grommet/components/Button';

const RegisterButton = ({ className, label, toggleForm }) => {
  return (
    <Button type="button" className={className} onClick={toggleForm} label={label} plain={true} />
  );
};

RegisterButton.defaultProps = {
  className: 'site-header__button--as-link',
  label: 'Register',
  toggleForm: () => {}
};

RegisterButton.propTypes = {
  className: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  toggleForm: PropTypes.func.isRequired
};

export default RegisterButton;

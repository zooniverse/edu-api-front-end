import React from 'react';
import PropTypes from 'prop-types';
import CheckBox from 'grommet/components/CheckBox';

const AdminCheckbox = (props) => {
  return (
    <CheckBox
      defaultChecked={props.defaultChecked}
      id="admin-checkbox"
      name="admin-checkbox"
      label={props.label}
      onChange={props.onChange}
      toggle={true}
    />
  );
};

AdminCheckbox.defaultProps = {
  defaultChecked: false,
  label: "Admin Mode",
  onChange: () => {}
};

AdminCheckbox.propTypes = {
  defaultChecked: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func
};

export default AdminCheckbox;

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Actions } from 'jumpstate';
import apiClient from 'panoptes-client/lib/api-client';
import AdminCheckbox from '../components/AdminCheckbox';

class AdminContainer extends React.Component {
  componentDidMount() {
    apiClient.update({
      'params.admin': !!localStorage.getItem('adminFlag') || undefined
    });
  }

  toggleAdminMode(e) {
    apiClient.update({
      'params.admin': e.target.checked || undefined
    });

    if (e.target.checked) {
      localStorage.setItem('adminFlag', true);
    } else {
      localStorage.removeItem('adminFlag');
    }
  }

  render() {
    if (this.props.initialised && this.props.user && this.props.user.admin) {
      return (<AdminCheckbox user={this.props.user} onChange={this.toggleAdminMode} />);
    }

    return null;
  }
}

AdminContainer.defaultProps = {
  initialised: false,
  user: null
};

AdminContainer.propTypes = {
  initialised: PropTypes.bool,
  user: PropTypes.object
};

function mapStateToProps(state) {
  return {
    initialised: state.auth.initialised,
    user: state.auth.user
  };
}

export default connect(mapStateToProps)(AdminContainer);

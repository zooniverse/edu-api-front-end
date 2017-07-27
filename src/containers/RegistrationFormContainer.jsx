import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Actions } from 'jumpstate';
import auth from 'panoptes-client/lib/auth';
import RegistrationForm from '../components/RegistrationForm';

const REMOTE_CHECK_DELAY = 1000;

class RegistrationFormContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValues: {
        userNameField: null
      },
      validations: {
        badNameChars: null,
        nameConflict: null,
        nameExists: null
      }
    };

    this.debouncedCheckForNameConflict = null;
    this.handleNameChange = this.handleNameChange.bind(this);
    this.validateNameField = this.validateNameField.bind(this);
  }

  handleNameChange(event) {
    const userNameField = event.target.value;
    const inputValues = { ...this.state.inputValues, userNameField };
    this.setState({ inputValues }, this.validateNameField);
  }

  validateNameField() {
    const nameExists = this.state.inputValues.userNameField.length !== 0;
    const userNameChars = this.state.inputValues.userNameField.split('');
    const invalidCharacters = /[\w\-\'\.]/;

    const badNameChars = userNameChars.filter(char => char.match(invalidCharacters) === null);

    const validations = { ...this.state.validations, nameExists, badNameChars };
    this.setState({ validations });

    if (nameExists && badNameChars.length === 0) {
      this.debouncedCheckForNameConflict = this.debouncedCheckForNameConflict(userNameField) || debounce(this.checkForNameConflict, REMOTE_CHECK_DELAY);
    }
  }

  checkForNameConflict(username) {
    auth.register({ login: username })
      .catch((error) => {

      });
  }

  registerWithPanoptes() {
    // Actions.auth.registerWithPanoptes();
  }

  render() {

    return (
      <RegistrationForm
        handleNameChange={this.handleNameChange}
        registerWithPanoptes={this.registerWithPanoptes}
        help={this.props.help}
        userNameFieldLabel="User name"
      />
    );
  }
}

RegistrationFormContainer.defaultProps = {
  help: {
    userNameHelp: 'You’ll use this name to log in. It will be shown publicly.'
  }
};

export default RegistrationFormContainer;

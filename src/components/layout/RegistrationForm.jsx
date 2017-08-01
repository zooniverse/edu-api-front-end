import React from 'react';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import Button from 'grommet/components/Button';
import Layer from 'grommet/components/Layer';

const RegistrationForm = (props) => {
  return (
    <Layer align="center" closer={true}>
      <Form onSubmit={props.registerWithPanoptes}>
        <FormField htmlFor="name" label={props.userNameFieldLabel} error={props.errors.userNameField} help={props.help.userNameField} />
        <TextInput id="name" onDOMChange={props.handleNameChange} value={props.inputValues.userNameField} autofocus={true} maxLength="255" />
      </Form>
      <Button />
    </Layer>
  );
};

export default RegistrationForm;

import React from 'react';

import Input from './Input';

type EmailInputProps = {
  emailInput: string;
  handleEmailInput: (enteredEmail: string) => void;
};

const EmailInput: React.FC<EmailInputProps> = ({
  emailInput,
  handleEmailInput,
}) => {
  return (
    <Input
      autoComplete="email"
      handleChangeInputValue={handleEmailInput}
      label="Email Address"
      inputValue={emailInput}
    />
  );
};

export default EmailInput;

import React from 'react';

import Input from './Input';

type PasswordInputProps = {
  passwordInput: string;
  handlePasswordInput: (enteredPassword: string) => void;
};

const PasswordInput: React.FC<PasswordInputProps> = ({
  passwordInput,
  handlePasswordInput,
}): JSX.Element => {
  return (
    <Input
      handleChangeInputValue={handlePasswordInput}
      label="Password"
      inputValue={passwordInput}
      secureTextEntry={true}
    />
  );
};

export default PasswordInput;

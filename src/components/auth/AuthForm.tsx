import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';

// components
import EmailInput from '../ui/EmailInput';
import PasswordInput from '../ui/PasswordInput';

// other
import { Colors, Font } from '../../library';
import { EMAIL, PASSWORD } from '../../constants';
import TextButton from '../ui/TextButton';
import { login } from '../../utils/authenticate';
import { authenticate } from '../../store/auth-store';

interface LoginForm {
  email: string | undefined;
  password: string | undefined;
}

const AuthForm = (): JSX.Element => {
  const dispatch = useDispatch();

  const initialFormState: LoginForm = {
    email: undefined,
    password: undefined,
  };

  const [loginForm, setLoginForm] = useState<LoginForm>(initialFormState);

  const handleEmailInput = (emailAddress: string) => {
    setLoginForm({ ...loginForm, email: emailAddress });
  };

  const handlePasswordInput = (password: string) => {
    setLoginForm({ ...loginForm, password });
  };

  const handleLoginSubmit = () => {
    if (!login(loginForm.email, loginForm.password)) {
      Alert.alert(
        'Invalid input',
        'Please check the entered email and password.',
      );
    } else {
      dispatch(authenticate({ authenticated: true }));
    }
  };

  return (
    <View>
      <EmailInput
        emailInput={loginForm.email ? loginForm.email : ''}
        handleEmailInput={handleEmailInput}
      />
      <Text style={styles.smallText}>
        {`(email = ${EMAIL}, password = ${PASSWORD})`}
      </Text>
      <PasswordInput
        passwordInput={loginForm.password ? loginForm.password : ''}
        handlePasswordInput={handlePasswordInput}
      />
      <TextButton buttonText="Log In" onPress={handleLoginSubmit} />
    </View>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  smallText: {
    color: Colors.Gray.grade60,
    fontSize: Font.size.size1,
    margin: 15,
    marginBottom: 0,
    marginTop: 0,
  },
});

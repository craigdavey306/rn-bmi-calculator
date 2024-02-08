import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AuthContext from '../components/auth/AuthContext';
import { Colors, Font } from '../library';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text testID="login-screen" style={styles.label}>
        Log In
      </Text>
      <AuthContext />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    color: Colors.Green.grade70,
    fontSize: Font.size.size6,
    fontWeight: 'bold',
    margin: 1,
    textAlign: 'center',
  },
});

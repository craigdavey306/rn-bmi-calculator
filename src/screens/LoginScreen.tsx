import React from 'react';
import { StyleSheet, View } from 'react-native';

import AuthContext from '../components/auth/AuthContext';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <AuthContext />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

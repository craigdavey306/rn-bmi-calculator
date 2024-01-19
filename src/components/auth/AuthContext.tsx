import React from 'react';
import {StyleSheet, View} from 'react-native';

import AuthForm from './AuthForm';
import {Colors} from '../../library/colors';

const AuthContext = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <AuthForm />
    </View>
  );
};

export default AuthContext;

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    marginHorizontal: 32,
    padding: 16,
    borderRadius: 8,
    backgroundColor: Colors.White.grade100,
    elevation: 2,
    shadowColor: Colors.Black.grade100,
    shadowOffset: {width: 1.2, height: 1.5},
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
});

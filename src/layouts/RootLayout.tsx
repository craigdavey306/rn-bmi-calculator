import React from 'react';
import { useSelector } from 'react-redux';

import BmiCalculatorScreen from '../screens/BmiCalculatorScreen';
import LoginScreen from '../screens/LoginScreen';
import { RootState } from '../models/state';

const RootLayout = (): JSX.Element => {
  const isAuthenticated = useSelector<RootState, boolean>(
    state => state.authenticated,
  );
  return <>{!isAuthenticated ? <LoginScreen /> : <BmiCalculatorScreen />}</>;
};

export default RootLayout;

import React from 'react';
import { Provider } from 'react-redux';

import RootLayout from './layouts/RootLayout';
import store from './store/auth-store';
import { SafeAreaView, StyleSheet } from 'react-native';

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <RootLayout />
      </SafeAreaView>
    </Provider>
  );
};

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
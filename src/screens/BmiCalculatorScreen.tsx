import React from 'react';
import { StyleSheet, View } from 'react-native';
import BmiCalculator from '../components/ui/BmiCalculator';

const BmiCalculatorScreen = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <BmiCalculator />
    </View>
  );
};

export default BmiCalculatorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

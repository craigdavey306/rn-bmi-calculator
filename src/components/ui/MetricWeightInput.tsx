import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Input from './Input';
import { Colors, Font } from '../../library';

type MetricWeightInputProps = {
  handleWeightInput: (weightKilograms: string) => void;
  weightInKilograms: string;
};

const MetricWeightInput: React.FC<MetricWeightInputProps> = ({
  handleWeightInput,
  weightInKilograms,
}): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text accessibilityRole="text" style={styles.label}>
        Weight
      </Text>
      <Input
        handleChangeInputValue={handleWeightInput}
        inputValue={weightInKilograms}
        keyboardType="numeric"
        label="Kilograms"
      />
    </View>
  );
};

export default MetricWeightInput;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  label: {
    color: Colors.Green.grade70,
    fontSize: Font.size.size6,
    fontWeight: 'bold',
    margin: 5,
    textAlign: 'center',
  },
});

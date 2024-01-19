import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Input from './Input';
import { Colors, Font } from '../../library';

type WeightInputProps = {
  handleWeightInput: (weightPounds: string) => void;
  weightInPounds: string;
};

const WeightInput: React.FC<WeightInputProps> = ({
  handleWeightInput,
  weightInPounds,
}): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text accessibilityRole="text" style={styles.label}>
        Weight
      </Text>
      <Input
        handleChangeInputValue={handleWeightInput}
        inputValue={weightInPounds}
        keyboardType="numeric"
        label="Pounds"
        maxLength={8}
      />
    </View>
  );
};

export default WeightInput;

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

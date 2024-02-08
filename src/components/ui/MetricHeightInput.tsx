import React, { LegacyRef } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Input from './Input';
import { Colors, Font } from '../../library';

type HeightInputProps = {
  handleHeight: (heightFeet: string) => void;
  heightInCentimeters: string;
};

const MetricHeightInput: React.FC<HeightInputProps> = ({
  handleHeight,
  heightInCentimeters,
}): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text accessibilityRole="text" style={styles.label}>
        Height
      </Text>
      <Input
        handleChangeInputValue={handleHeight}
        inputValue={heightInCentimeters}
        keyboardType="number-pad"
        label="Centimeters"
      />
    </View>
  );
};

export default MetricHeightInput;

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

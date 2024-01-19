import React, { LegacyRef } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Input from './Input';
import { Colors, Font } from '../../library';

type HeightInputProps = {
  handleFeetInput: (heightFeet: string) => void;
  handleInchesInput: (heightInches: string) => void;
  heightInFeet: string;
  heightInInches: string;
};

const HeightInput: React.FC<HeightInputProps> = ({
  handleFeetInput,
  handleInchesInput,
  heightInFeet,
  heightInInches,
}): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text accessibilityRole="text" style={styles.label}>
        Height
      </Text>
      <Input
        handleChangeInputValue={handleFeetInput}
        inputValue={heightInFeet}
        keyboardType="number-pad"
        label="Feet"
        maxLength={1}
      />
      <Input
        handleChangeInputValue={handleInchesInput}
        inputValue={heightInInches}
        keyboardType="number-pad"
        label="Inches"
        maxLength={2}
      />
    </View>
  );
};

export default HeightInput;

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

import React, { LegacyRef, useRef, useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';

import HeightInput from './HeightInput';
import WeightInput from './WeightInput';
import BmiResult from './BmiResult';
import TextButton from './TextButton';

import { Colors, Font } from '../../library';
import { FOOT_RANGE, INCH_RANGE, WEIGHT_RANGE } from '../../constants';

const BmiCalculator = () => {
  const [heightFeetString, setHeightFeetString] = useState('');
  const [heightInchesString, setHeightInchesString] = useState('');
  const [weightString, setWeightString] = useState('');
  const [bmi, setBMI] = useState('');
  const [bmiCalculated, setbmiCalculated] = useState(false);

  const handleHeightFeetInput = (heightInFeet: string) => {
    setBMI('');
    setHeightFeetString(heightInFeet);
  };

  const handleHeightInchesInput = (heightInInches: string) => {
    setBMI('');
    setHeightInchesString(heightInInches);
  };

  const handleWeightInput = (weightInput: string) => {
    setBMI('');
    setWeightString(weightInput);
  };

  const isValidInput = (input: number, range: typeof FOOT_RANGE) => {
    return input >= range.minimum && input <= range.maximum;
  };

  const resetCalculator = () => {
    setBMI('');
    setHeightFeetString('');
    setHeightInchesString('');
    setWeightString('');
    setbmiCalculated(false);
  };

  const calculateBmi = () => {
    if (!heightFeetString || !heightInchesString || !weightString) {
      Alert.alert('All input values are required.');
      return;
    }

    const feet = Number(heightFeetString);
    const inches = Number(heightInchesString);
    const weight = Number(weightString);

    if (!isValidInput(feet, FOOT_RANGE)) {
      Alert.alert(
        `Feet must be between ${FOOT_RANGE.minimum} and ${FOOT_RANGE.maximum}.`,
      );
      return;
    }

    if (!isValidInput(inches, INCH_RANGE)) {
      Alert.alert(
        `Inches must be between ${INCH_RANGE.minimum} and ${INCH_RANGE.maximum}.`,
      );
      return;
    }

    if (!isValidInput(weight, WEIGHT_RANGE)) {
      Alert.alert(`Weight must be greate than ${WEIGHT_RANGE.minimum}.`);
      return;
    }

    const height = feet * 12 + inches;
    const calculatedBMI = (weight / Math.pow(height, 2)) * 703;

    setBMI(calculatedBMI.toFixed(1));
    setbmiCalculated(true);
  };

  const button = !bmiCalculated ? (
    <TextButton buttonText="Calculate BMI" onPress={calculateBmi} />
  ) : (
    <TextButton buttonText="Reset" onPress={resetCalculator} />
  );

  return (
    <View style={styles.container}>
      <Text accessibilityRole="text" style={styles.label}>
        BMI Calculator
      </Text>
      <HeightInput
        handleFeetInput={handleHeightFeetInput}
        handleInchesInput={handleHeightInchesInput}
        heightInFeet={heightFeetString}
        heightInInches={heightInchesString}
      />
      <WeightInput
        handleWeightInput={handleWeightInput}
        weightInPounds={weightString}
      />
      <View style={styles.calculateBtn}>{button}</View>
      <BmiResult calculatedBmi={bmi} />
    </View>
  );
};

export default BmiCalculator;

const styles = StyleSheet.create({
  calculateBtn: {
    paddingTop: 10,
    paddingLeft: 30,
    paddingRight: 30,
  },
  container: {
    flex: 1,
  },
  label: {
    color: Colors.Green.grade70,
    fontSize: Font.size.size7,
    fontWeight: 'bold',
    margin: 5,
    textAlign: 'center',
  },
});

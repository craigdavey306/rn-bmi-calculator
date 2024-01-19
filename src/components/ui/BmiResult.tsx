import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors, Font } from '../../library';

type BmiResultProps = {
  calculatedBmi: string;
};

const BmiResult: React.FC<BmiResultProps> = ({
  calculatedBmi,
}): JSX.Element => {
  return (
    <View style={styles.container}>
      {calculatedBmi && (
        <Text
          style={
            styles.bmiLabel
          }>{`The calculated BMI is ${calculatedBmi}`}</Text>
      )}
    </View>
  );
};

export default BmiResult;

const styles = StyleSheet.create({
  bmiLabel: {
    color: Colors.Green.grade70,
    fontSize: Font.size.size6,
    fontWeight: 'bold',
    margin: 5,
    textAlign: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 5,
  },
});

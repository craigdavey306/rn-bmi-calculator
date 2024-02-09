import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Switch, Text, View } from 'react-native';

import BmiResult from './BmiResult';
import TextButton from './TextButton';
import EnglishBmiCalculator from '../calculators/EnglishBmiCalculator';
import MetricBmiCalculator from '../calculators/MetricBmiCalculator';

import { Colors, Font } from '../../library';
import {
  FOOT_RANGE,
  INCH_RANGE,
  WEIGHT_RANGE,
  ENGLISH_BMI_MULTIPLIER,
  METRIC_BMI_MULTIPLIER,
} from '../../constants';

import { getTestId } from '../../utils/helpers';

type CalculatorUnit = 'metric' | 'english';

interface Calculator {
  unit: CalculatorUnit;
  calculatedBmi: number;
  bmiPrecision: number;
}

export interface MetricCalculator extends Calculator {
  unit: 'metric';
  heightCentimeters: string;
  weightKilograms: string;
  calculate: (height: string, weight: string) => void;
}

export interface EnglishCalculator extends Calculator {
  unit: 'english';
  heightFeet: string;
  heightInches: string;
  weightPounds: string;
  calculate: (heightFeet: string, heightInches: string, weight: string) => void;
}

const BmiCalculator = (): JSX.Element => {
  const [isEnglishUnit, setIsEnglisUnit] = useState(true);
  const mode = isEnglishUnit ? 'english' : 'metric';
  const [isCalculated, setIsCalculated] = useState(false);
  const [calcState, setCalcState] = useState<
    EnglishCalculator | MetricCalculator
  >(getInitialState(mode));

  function isValidEnglishInput(input: number, range: typeof FOOT_RANGE) {
    return input >= range.minimum && input <= range.maximum;
  }

  function calculateBmi(
    height: number,
    weight: number,
    multiplier: number = 1,
  ) {
    return (weight / Math.pow(height, 2)) * multiplier;
  }

  function calculateEnglishBmi(
    heightFeetString: string,
    heightInchesString: string,
    weightPoundsString: string,
  ): void {
    if (!heightFeetString || !heightInchesString || !weightPoundsString) {
      throw new Error('All input values are required.');
    }

    const heightFeet = heightFeetString ? parseInt(heightFeetString) : 0;
    if (!isValidEnglishInput(heightFeet, FOOT_RANGE)) {
      throw new Error(
        `Feet must be between ${FOOT_RANGE.minimum} and ${FOOT_RANGE.maximum}.`,
      );
    }

    const heightInches = heightInchesString ? parseInt(heightInchesString) : 0;
    if (!isValidEnglishInput(heightInches, INCH_RANGE)) {
      throw new Error(
        `Inches must be between ${INCH_RANGE.minimum} and ${INCH_RANGE.maximum}.`,
      );
    }

    const weight = weightPoundsString ? parseInt(weightPoundsString) : 0;
    if (!isValidEnglishInput(weight, WEIGHT_RANGE)) {
      throw new Error(`Weight must be greater than ${WEIGHT_RANGE.minimum}.`);
    }

    const height = heightFeet * 12 + heightInches;
    const calculatedBmi = calculateBmi(height, weight, ENGLISH_BMI_MULTIPLIER);
    setCalcState({ ...calcState, calculatedBmi });
  }

  function calculateMetricBmi(
    heightCentimeters: string,
    weightKilograms: string,
  ): void {
    const height = heightCentimeters ? parseFloat(heightCentimeters) : 0;
    const weight = weightKilograms ? parseFloat(weightKilograms) : 0;
    const calculatedBmi = calculateBmi(height, weight, METRIC_BMI_MULTIPLIER);

    setCalcState({ ...calcState, calculatedBmi });
  }

  function getInitialState(
    unit: CalculatorUnit,
  ): MetricCalculator | EnglishCalculator {
    switch (unit) {
      case 'english':
        return {
          unit,
          heightFeet: '',
          heightInches: '',
          weightPounds: '',
          calculatedBmi: 0,
          bmiPrecision: 1,
          calculate: calculateEnglishBmi,
        };

      case 'metric':
        return {
          unit,
          heightCentimeters: '',
          weightKilograms: '',
          calculatedBmi: 0,
          bmiPrecision: 1,
          calculate: calculateMetricBmi,
        };
    }
  }

  function handleHeightFeetInput(
    calc: EnglishCalculator,
    heightFeet: string,
  ): void {
    setCalcState({ ...calc, heightFeet });
  }

  function handleHeightInchesInput(
    calc: EnglishCalculator,
    heightInches: string,
  ): void {
    setCalcState({ ...calc, heightInches });
  }

  function handleWeightPounds(calc: EnglishCalculator, weightPounds: string) {
    setCalcState({ ...calc, weightPounds });
  }

  function handleWeightKilograms(
    calc: MetricCalculator,
    weightKilograms: string,
  ) {
    setCalcState({ ...calc, weightKilograms });
  }

  function handleHeightCentimeters(
    calc: MetricCalculator,
    heightCentimeters: string,
  ) {
    setCalcState({ ...calc, heightCentimeters });
  }

  function handleCalculateBmiBtnPress() {
    if (calcState.unit === 'english') {
      try {
        calculateEnglishBmi(
          calcState.heightFeet,
          calcState.heightInches,
          calcState.weightPounds,
        );
        setIsCalculated(true);
      } catch (error) {
        if (error instanceof Error) {
          Alert.alert(error.message);
        }
      }
    } else {
      calculateMetricBmi(
        calcState.heightCentimeters,
        calcState.weightKilograms,
      );
      setIsCalculated(true);
    }
  }

  function resetCalculator() {
    setCalcState(getInitialState(mode));
    setIsCalculated(false);
  }

  const button = !isCalculated ? (
    <TextButton
      buttonText="Calculate BMI"
      onPress={handleCalculateBmiBtnPress}
    />
  ) : (
    <TextButton buttonText="Reset" onPress={resetCalculator} />
  );

  function renderCalculatorInputs(): JSX.Element {
    return calcState.unit === 'english' ? (
      <EnglishBmiCalculator
        heightFeet={calcState.heightFeet}
        heightInches={calcState.heightInches}
        weightPounds={calcState.weightPounds}
        handleHeightFeetInput={(heightFeet: string) =>
          handleHeightFeetInput(calcState, heightFeet)
        }
        handleHeightInchesInput={(heightInches: string) =>
          handleHeightInchesInput(calcState, heightInches)
        }
        handleWeightPoundsInput={(weightPounds: string) =>
          handleWeightPounds(calcState, weightPounds)
        }
      />
    ) : (
      <MetricBmiCalculator
        heightCentimeters={calcState.heightCentimeters}
        weightKilograms={calcState.weightKilograms}
        handleHeightInput={(heightCentimeters: string) =>
          handleHeightCentimeters(calcState, heightCentimeters)
        }
        handleWeightInput={(weightKilograms: string) =>
          handleWeightKilograms(calcState, weightKilograms)
        }
      />
    );
  }

  useEffect(() => {
    resetCalculator();
  }, [mode]);

  return (
    <View style={styles.container}>
      <Text
        style={styles.label}
        testID={getTestId('bmi-calculator-label')}
        accessible={true}
        accessibilityLabel="BMI Calculator">
        BMI Calculator
      </Text>
      <View style={styles.unit}>
        <Text style={styles.labelSecondary}>English Units</Text>
        <Switch
          testID={getTestId('english-unit-switch')}
          accessible={true}
          accessibilityLabel="English Unit Switch"
          trackColor={{
            false: Colors.Gray.grade50,
            true: Colors.Green.grade10,
          }}
          thumbColor={
            isEnglishUnit ? Colors.Green.grade50 : Colors.Gray.grade25
          }
          onValueChange={() => setIsEnglisUnit(!isEnglishUnit)}
          value={isEnglishUnit}
        />
      </View>
      {renderCalculatorInputs()}
      <View style={styles.calculateBtn}>{button}</View>
      {isCalculated && (
        <BmiResult
          calculatedBmi={calcState.calculatedBmi.toFixed(
            calcState.bmiPrecision,
          )}
        />
      )}
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
  labelSecondary: {
    fontSize: Font.size.size5,
    color: Colors.Black.grade100,
    marginTop: 3,
    paddingRight: 5,
    alignContent: 'center',
  },
  unit: {
    paddingLeft: 10,
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

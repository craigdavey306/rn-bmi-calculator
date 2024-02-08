import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';

import HeightInput from '../ui/HeightInput';
import WeightInput from '../ui/WeightInput';

import { EnglishCalculator } from '../ui/BmiCalculator';
import { Colors, Font } from '../../library';

type EnglishBmiCalculatorProps = {
  handleHeightFeetInput: (heightFeet: string) => void;
  handleHeightInchesInput: (heightInches: string) => void;
  handleWeightPoundsInput: (weightPounds: string) => void;
} & Pick<EnglishCalculator, 'heightFeet' | 'heightInches' | 'weightPounds'>;

const EnglishBmiCalculator: React.FC<EnglishBmiCalculatorProps> = ({
  handleHeightFeetInput,
  handleHeightInchesInput,
  handleWeightPoundsInput,
  heightFeet,
  heightInches,
  weightPounds,
}) => {
  return (
    <View>
      <HeightInput
        handleFeetInput={handleHeightFeetInput}
        handleInchesInput={handleHeightInchesInput}
        heightInFeet={heightFeet.toString()}
        heightInInches={heightInches.toString()}
      />
      <WeightInput
        handleWeightInput={handleWeightPoundsInput}
        weightInPounds={weightPounds.toString()}
      />
    </View>
  );
};

export default EnglishBmiCalculator;

const styles = StyleSheet.create({
  label: {
    color: Colors.Green.grade70,
    fontSize: Font.size.size7,
    fontWeight: 'bold',
    margin: 5,
    textAlign: 'center',
  },
});

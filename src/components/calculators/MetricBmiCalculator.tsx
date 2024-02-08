import { Text, View } from 'react-native';

import MetricHeightInput from '../ui/MetricHeightInput';
import WeightInput from '../ui/WeightInput';

import { MetricCalculator } from '../ui/BmiCalculator';
import MetricWeightInput from '../ui/MetricWeightInput';

type MetricBmiCalculatorProps = {
  handleHeightInput: (heightCentimeters: string) => void;
  handleWeightInput: (weightKilograms: string) => void;
} & Pick<MetricCalculator, 'heightCentimeters' | 'weightKilograms'>;

const MetricBmiCalculator: React.FC<MetricBmiCalculatorProps> = ({
  handleHeightInput,
  handleWeightInput,
  heightCentimeters,
  weightKilograms,
}): JSX.Element => {
  return (
    <View>
      <MetricHeightInput
        handleHeight={handleHeightInput}
        heightInCentimeters={heightCentimeters}
      />
      <MetricWeightInput
        handleWeightInput={handleWeightInput}
        weightInKilograms={weightKilograms}
      />
    </View>
  );
};

export default MetricBmiCalculator;

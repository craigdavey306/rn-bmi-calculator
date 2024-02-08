import 'react-native';
import renderer from 'react-test-renderer';
import { expect, it } from '@jest/globals';
import MetricBmiCalculator from '../../src/components/calculators/MetricBmiCalculator';

it('Renders the English BMI Calculator correctly', () => {
  const stub = (input: string) => {};

  const calculator = (
    <MetricBmiCalculator
      heightCentimeters=""
      weightKilograms=""
      handleHeightInput={stub}
      handleWeightInput={stub}
    />
  );

  const tree = renderer.create(calculator).toJSON();

  expect(tree).toMatchSnapshot();
});

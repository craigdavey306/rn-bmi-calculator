import 'react-native';
import renderer from 'react-test-renderer';
import { expect, it } from '@jest/globals';
import EnglishBmiCalculator from '../../src/components/calculators/EnglishBmiCalculator';

it('Renders the English BMI Calculator correctly', () => {
  const stub = (input: string) => {};
  const calculator = (
    <EnglishBmiCalculator
      heightFeet=""
      heightInches=""
      weightPounds=""
      handleHeightFeetInput={stub}
      handleHeightInchesInput={stub}
      handleWeightPoundsInput={stub}
    />
  );

  const tree = renderer.create(calculator).toJSON();

  expect(tree).toMatchSnapshot();
});

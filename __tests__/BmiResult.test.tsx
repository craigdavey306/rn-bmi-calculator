import { it, expect, describe } from '@jest/globals';
import { render, screen } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';

import BmiResult from '../src/components/ui/BmiResult';

const BMI_RESULT_TESTID = 'bmi-result';

describe('BMI Result tests', () => {
  it('Renders the BMI Result correctly for valid inputs', async () => {
    const bmiInputs: string[] = ['34.3', '0', '12'];

    for (let calculatedBmi of bmiInputs) {
      const expectedMessage = `The calculated BMI is ${calculatedBmi}`;
      render(<BmiResult calculatedBmi={calculatedBmi} />);

      const bmiResult = await screen.findByTestId(BMI_RESULT_TESTID);

      expect(bmiResult).toHaveTextContent(expectedMessage);
    }
  });

  it('Does not render any result when input is falsy', async () => {
    const bmiInput = '';

    render(<BmiResult calculatedBmi="" />);

    let bmiResult;

    try {
      bmiResult = await screen.findByTestId(BMI_RESULT_TESTID);
    } catch (err) {
      // expect this to fail.
    }

    expect(bmiResult).toBeUndefined();
  });
});

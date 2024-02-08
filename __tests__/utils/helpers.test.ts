import { it, expect, describe } from '@jest/globals';

import { getTestId } from '../../src/utils/helpers';

describe('Get Test ID tests', () => {
  it('Returns empty string when the argument is an empty string', () => {
    const label = '';
    const expectedResult = '';

    const result = getTestId(label);

    expect(result).toBeFalsy();
    expect(result).toStrictEqual(expectedResult);
  });

  it('Returns the correct testID', () => {
    const label = 'my-test-element';
    const expectedResult = 'my-test-element:testid';

    const result = getTestId(label);

    expect(result).toStrictEqual(expectedResult);
  });
});

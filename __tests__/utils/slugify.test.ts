import { it, expect } from '@jest/globals';

import { slugifyString } from '../../src/utils/slugify';

it('Given a string with spaces, it is transformed into a slug', () => {
  const str = 'Once Upon A Time';
  const expected = 'once-upon-a-time';

  for (let testString of [str, str.toLowerCase(), str.toUpperCase()]) {
    const result = slugifyString(testString, ' ', '-');

    expect(result).toBe(expected);
  }
});

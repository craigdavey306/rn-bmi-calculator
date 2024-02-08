import { it, expect, describe } from '@jest/globals';

import { login } from '../../src/utils/authenticate';

describe('Authentication tests', () => {
  it('Given undefined email and password, login return false', () => {
    let email;
    let password;

    expect(login(email, password)).toBe(false);
  });

  it('Given the correct email and password, login returns true', () => {
    const email = 'test@email.com';
    const password = 'secret1234';

    expect(login(email, password)).toBe(true);
  });

  it('Given the correct email and wrong password, login returns false', () => {
    const email = 'test@email.com';
    const password = 'secret12345';

    expect(login(email, password)).toBe(false);
  });

  it('Given the wrong email and correct password, login returns false', () => {
    const email = 'test2@email.com';
    const password = 'secret1234';

    expect(login(email, password)).toBe(false);
  });
});

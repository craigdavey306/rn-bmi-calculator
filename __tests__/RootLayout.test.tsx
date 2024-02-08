import { it, expect, describe, jest } from '@jest/globals';
import { screen } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';

import RootLayout from '../src/layouts/RootLayout';
import { renderWithProvider } from '../src/utils/test-utils/redux-utils';

describe('RootLayout tests', () => {
  it('RootLayout displays Login Screen when user is not authenticated', async () => {
    const expectedTitle = 'Log In';

    renderWithProvider(<RootLayout />);

    const screenTitle = await screen.findByTestId('login-screen');

    expect(screenTitle).toHaveTextContent(expectedTitle);
  });
});

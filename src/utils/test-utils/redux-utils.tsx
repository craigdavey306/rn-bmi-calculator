import React, { PropsWithChildren } from 'react';
import { render } from '@testing-library/react-native';
import type { RenderOptions } from '@testing-library/react-native';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import { RootState } from '../../models/state';
import store from '../../store/auth-store';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Partial<RootState>;
  extendedStore?: typeof store;
}

export function renderWithProvider(
  ui: React.ReactElement,
  {
    preloadedState = {},
    extendedStore = store,
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {
  const Wrapper: React.FC<PropsWithChildren<{}>> = ({
    children,
  }): JSX.Element => {
    return <Provider store={store}>{children}</Provider>;
  };

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

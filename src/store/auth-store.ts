import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../models/state';

const initialState: RootState = {
  authenticated: false,
};

const authSlice = createSlice({
  name: 'bmi-calc-auth',
  initialState,
  reducers: {
    authenticate: (state, action: PayloadAction<RootState>) => {
      state.authenticated = action.payload.authenticated;
    },
    logout: state => {
      state.authenticated = false;
    },
  },
});

const store = configureStore({ reducer: authSlice.reducer });

export const { authenticate, logout } = authSlice.actions;

export default store;

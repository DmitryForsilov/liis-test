/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    status: 'NOT_AUTHORIZED',
  },
  reducers: {
    setUser(state, { payload: { status } }) {
      return { status };
    },
  },
});

export const userActions = {
  ...userSlice.actions,
};

export const userReducer = userSlice.reducer;

/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const flightOptionsSlice = createSlice({
  name: 'flightOptions',
  initialState: {
    origin: 'SVO',
    destination: 'JFK',
    departureDate: Date.now(),
  },
  reducers: {
    setDepartureDate(state, { payload: { departureDate } }) {
      state.departureDate = departureDate;
    },
  },
});

export const flightOptionsActions = {
  ...flightOptionsSlice.actions,
};

export const flightOptionsReducer = flightOptionsSlice.reducer;

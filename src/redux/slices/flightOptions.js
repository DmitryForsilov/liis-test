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
    setFlightOptions(state, { payload: { options } }) {
      const updatedState = { ...state, ...options };
      /* const { departureDate } = updatedState;

      updatedState.departureDate = formatDate(departureDate); */
      return updatedState;
    },
  },
});

export const flightOptionsActions = {
  ...flightOptionsSlice.actions,
};

export const flightOptionsReducer = flightOptionsSlice.reducer;

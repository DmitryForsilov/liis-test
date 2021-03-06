/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import * as utils from '../../utils';

const proccessFlightsData = (flights, departureDate) => flights.map(() => ({
  id: _.uniqueId(),
  origin: 'Moscow (SVO)',
  destination: 'New York City (JFK)',
  departureDate,
  departureTime: utils.getRandomTime(),
  carrier: 'Aeroflot',
  price: utils.getRandomPrice(),
  isLiked: false,
}));

const sortByPrice = (flightsList) => {
  flightsList.allIds.sort((id1, id2) => {
    const price1 = flightsList.flightsById[id1].price;
    const price2 = flightsList.flightsById[id2].price;

    return price1 - price2;
  });
};

const generateInitialFligtsList = () => ({
  flightsById: {},
  allIds: [],
});

const flightsSlice = createSlice({
  name: 'flights',
  initialState: {
    flightsList: generateInitialFligtsList(),
    likedFlightsIds: [],
    fetchFlightsError: null,
  },
  reducers: {
    fetchFlightsSuccess(state, { payload: { flights, departureDate } }) {
      const proccessedFlights = proccessFlightsData(flights, departureDate);
      const newFlightsList = generateInitialFligtsList();

      proccessedFlights.forEach((flight) => {
        newFlightsList.flightsById[flight.id] = flight;
        newFlightsList.allIds.push(flight.id);
      });

      sortByPrice(newFlightsList);
      state.flightsList = newFlightsList;
      state.likedFlightsIds = [];
    },
    fetchFlightsFailure(state, { payload: { error } }) {
      state.fetchFlightsError = error;
    },
    addFlightToLiked(state, { payload: { id } }) {
      state.flightsList.flightsById[id].isLiked = true;
      state.likedFlightsIds.push(id);
    },
    removeFlightFromLiked(state, { payload: { id } }) {
      const updatedLikedFlightsIds = _.remove(state.likedFlightsIds, (likedId) => likedId !== id);

      state.flightsList.flightsById[id].isLiked = false;
      state.likedFlightsIds = updatedLikedFlightsIds;
    },
  },
});

const fetchFlightsRequest = ({ departureDate }) => (
  { type: 'flights/fetchFlights_request', payload: { departureDate } }
);

export const flightsActions = {
  ...flightsSlice.actions,
  fetchFlightsRequest,
};

export const flightsReducer = flightsSlice.reducer;

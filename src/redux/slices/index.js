import { userActions, userReducer } from './user';
import { travelImagesActions, travelImagesReducer } from './travelImages';
import { flightOptionsActions, flightOptionsReducer } from './flightOptions';
import { flightsActions, flightsReducer } from './flights';

export const actions = {
  ...userActions,
  ...travelImagesActions,
  ...flightOptionsActions,
  ...flightsActions,
};

export const reducers = {
  user: userReducer,
  travelImages: travelImagesReducer,
  flightOptions: flightOptionsReducer,
  flights: flightsReducer,
};

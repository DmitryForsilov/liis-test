import { takeEvery, call, put } from 'redux-saga/effects';
import { actions } from '../slices';
import * as api from '../../api';

function* fetchFlightsWorker({ payload }) {
  try {
    const flights = yield call(api.fetchFakeFlights);

    console.log('departureDate in saga', payload.departureDate);
    yield put(actions.fetchFlightsSuccess({ flights, departureDate: payload.departureDate }));
  } catch (error) {
    console.log(error);
    yield put(actions.fetchFlightsFailure({ error }));
  }
}

export default function* fetchFlightsWatcher() {
  yield takeEvery('flights/fetchFlights_request', fetchFlightsWorker);
}

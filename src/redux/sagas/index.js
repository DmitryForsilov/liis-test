import { all } from 'redux-saga/effects';
import fetchFlightsWorker from './fetchFlightsWorker';

export default function* rootSaga() {
  yield all([
    fetchFlightsWorker(),
  ]);
}

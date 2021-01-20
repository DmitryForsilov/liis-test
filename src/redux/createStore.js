import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { reducers } from './slices';
import rootSaga from './sagas';

export default () => {
  const defaultMiddlewares = getDefaultMiddleware();
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: reducers,
    middleware: defaultMiddlewares.concat(sagaMiddleware),
  });

  sagaMiddleware.run(rootSaga);

  return store;
};

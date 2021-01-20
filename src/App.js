import React, { useEffect } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import HomePage from './pages/Home/Home';
import FlightsPage from './pages/Flights/Flights';
import { actions } from './redux/slices';
import * as api from './api';

const checkAuthorization = ({ dispatch, departureDate }) => {
  const login = api.getLoginFromCookie();

  if (login) {
    dispatch(actions.fetchFlightsRequest({ departureDate }));
    dispatch(actions.setUser({ status: 'AUTHORIZED' }));
  }
};

export default () => {
  console.log('render App');

  const dispatch = useDispatch();
  const departureDate = useSelector(({ flightOptions }) => flightOptions.departureDate);

  useEffect(() => {
    checkAuthorization({ dispatch, departureDate });
  });

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/flights" component={FlightsPage} />
      </Switch>
    </BrowserRouter>
  );
};

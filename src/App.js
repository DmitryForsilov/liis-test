import React, { useEffect } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import HomePage from './pages/Home/Home';
import FlightsPage from './pages/Flights/Flights';
import { actions } from './redux/slices';
import { getLoginFromCookie } from './api';

export default () => {
  console.log('render App');

  const dispatch = useDispatch();

  // заюзать сагу?
  useEffect(() => {
    const login = getLoginFromCookie();

    if (login) {
      dispatch(actions.setUser({ status: 'AUTHORIZED' }));
    }
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

import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
// import HomePage from './pages/Home/Home';
import FlightsPage from './pages/Flights/Flights';

export default () => {
  console.log('render App');

  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/" component={HomePage} /> */}
        <Route exact path="/" component={FlightsPage} />
      </Switch>
    </BrowserRouter>
  );
};

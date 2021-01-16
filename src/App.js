import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';

export default () => {
  console.log('render App');

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
};

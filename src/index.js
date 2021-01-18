import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './vendor/normalize.css';
import './index.css';
import createStore from './redux/createStore';

const run = () => {
  render(
    <React.StrictMode>
      <Provider store={createStore()}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
  );
};

run();

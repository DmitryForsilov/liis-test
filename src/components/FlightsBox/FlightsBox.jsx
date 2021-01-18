import React from 'react';
import cn from 'classnames';
import styles from './styles.module.css';

const getFlights = (count = 20) => {
  const flights = [];

  for (let i = 0; i < count; i += 1) {
    const flight = {
      id: i,
      departure: 'Moscow (SVO)',
      arrival: 'New York City (JFK)',
      date: '28 June, 2020',
      time: '14:50',
      company: 'Aeroflot',
      price: '23 924 ₽',
    };

    flights.push(flight);
  }

  return flights;
};

const generateOnClick = () => () => {
  console.log('like');
};

const renderLikeButton = () => {
  const classes = cn(styles['flights-box__like-button'], {
    [styles['flights-box__like-button_liked']]: false,
  });

  return (
    <button className={classes} type="button" onClick={generateOnClick()}>
      <svg width="23" height="20" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20.38 2.591a5.533 5.533 0 00-1.792-1.177 5.61 5.61 0 00-4.23 0c-.671.273-1.28.673-1.793 1.177L11.5 3.638 10.435 2.59a5.576 5.576 0 00-3.908-1.59 5.576 5.576 0 00-3.908 1.59A5.384 5.384 0 001 6.431c0 1.441.582 2.823 1.619 3.841l1.065 1.047L11.5 19l7.816-7.681 1.065-1.047a5.423 5.423 0 001.198-1.762 5.348 5.348 0 000-4.157 5.423 5.423 0 00-1.198-1.762v0z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

const renderFlight = (flight) => (
  <li key={flight.id} className={styles['flights-box__list-item']}>
    <div key={flight.id} className={styles['flights-box__flight-icon']} />
    <div className={styles['flights-box__flight-info-container']}>
      <div className={styles['flights-box__flight-info-panel']}>
        <p className={styles['flights-box__route']}>
          <span>{flight.departure}</span>
          <span>{flight.arrival}</span>
        </p>
        {renderLikeButton()}
      </div>
      <div className={styles['flights-box__flight-info-panel']}>
        <p className={styles['flights-box__date-time']}>
          <span>{flight.date}</span>
          <span>{flight.time}</span>
        </p>
      </div>
      <div className={styles['flights-box__flight-info-panel']}>
        <p className={styles['flights-box__company']}>{flight.company}</p>
        <p className={styles['flights-box__price']}>
          Price:
          <span>{` ${flight.price}`}</span>
        </p>
      </div>
    </div>
  </li>
);

export default () => {
  console.log('render flights box');

  const flights = getFlights();

  if (flights.length < 1) {
    return (
      <div className={styles['flights-box']}>
        <p className={styles['flights-box__no-flights-message']}>На эту дату нет вылетов. Выберите другую дату.</p>
      </div>
    );
  }
  return (
    <div className={styles['flights-box']}>
      <p className={styles['flights-box__favorites']}>
        Добавлено в Избранное:
        <span>{' 10 '}</span>
        рейсов
      </p>
      <ul className={styles['flights-box__list']}>
        {flights.map(renderFlight)}
      </ul>
    </div>
  );
};

import React from 'react';
import { useSelector/* , useDispatch */ } from 'react-redux';
import cn from 'classnames';
// import { actions } from '../../redux/slices';
import styles from './styles.module.css';
import * as utils from '../../utils';

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
          <span>{flight.origin}</span>
          <span>{flight.destination}</span>
        </p>
        {renderLikeButton()}
      </div>
      <div className={styles['flights-box__flight-info-panel']}>
        <p className={styles['flights-box__date-time']}>
          <span>{utils.formatDate(flight.departureDate)}</span>
          <span>{flight.departureTime}</span>
        </p>
      </div>
      <div className={styles['flights-box__flight-info-panel']}>
        <p className={styles['flights-box__company']}>{flight.carrier}</p>
        <p className={styles['flights-box__price']}>
          Price:
          <span>{` ${utils.formatPrice(flight.price)}`}</span>
        </p>
      </div>
    </div>
  </li>
);

export default () => {
  console.log('render flights box');

  const flightsList = useSelector(({ flights }) => (
    flights.flightsList.allIds.map((id) => flights.flightsList.flightsById[id])
  ));
  const favoritesCount = useSelector(({ flights }) => flights.favoritesCount);
  const error = useSelector(({ flights }) => flights.fetchFlightsError);

  const messageClasses = cn(styles['flights-box__message'], {
    [styles['flights-box__message_invalid']]: error,
  });

  if (flightsList.length < 1 || error) {
    return (
      <div className={styles['flights-box']}>
        <p className={messageClasses}>
          {error
            ? 'Не удается загрузить данные о вылетах.'
            : 'На эту дату нет вылетов. Выберите другую дату.'}
        </p>
      </div>
    );
  }
  return (
    <div className={styles['flights-box']}>
      <p className={styles['flights-box__favorites']}>
        Добавлено в Избранное:
        <span>
          {` ${favoritesCount} `}
        </span>
        рейсов
      </p>
      <ul className={styles['flights-box__list']}>
        {flightsList.map(renderFlight)}
      </ul>
    </div>
  );
};

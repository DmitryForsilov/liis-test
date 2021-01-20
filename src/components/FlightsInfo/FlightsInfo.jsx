import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './styles.module.css';
import * as utils from '../../utils';
import { actions } from '../../redux/slices';

const renderCalendarButton = ({ departureDate }) => (
  <button className={styles['flights-board__calendar-button']} type="button">
    <span className={styles['flights-board__calendar-button-text']}>{utils.formatDate(departureDate)}</span>
    <svg width="22" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        className={styles['flights-board__calendar-button-icon']}
        d="M18 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zM15 2v4M7 2v4M2 10h18"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
);

const generateOnChange = ({ dispatch }) => (date) => {
  const utcDate = utils.converStringDateToUtcInMs(date);

  dispatch(actions.fetchFlightsRequest({ departureDate: utcDate }));
  dispatch(actions.setDepartureDate({ departureDate: utcDate }));
};

export default () => {
  console.log('render flights info');

  const {
    origin, destination, departureDate,
  } = useSelector((state) => state.flightOptions);
  const dispatch = useDispatch();
  console.log('departureDate in info', departureDate);

  return (
    <div className={styles['flights-board__info']}>
      <p className={styles['flights-board__route']}>
        <span>Вылеты</span>
        <span>
          {origin}
          {' - '}
          {destination}
        </span>
      </p>
      <div style={{ zIndex: 10 }}>
        <DatePicker
          customInput={renderCalendarButton({ departureDate })}
          selected={departureDate}
          onChange={generateOnChange({ dispatch })}
        />
      </div>
    </div>
  );
};

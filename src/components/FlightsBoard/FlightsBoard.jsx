import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import styles from './styles.module.css';
import FlightsInfo from '../FlightsInfo/FlightsInfo';
import Slider from '../Slider/Slider';
import FlightsBox from '../FlightsBox/FlightsBox';

export default () => {
  console.log('render FlightsBoard');

  const user = useSelector((state) => state.user);

  if (user.status === 'NOT_AUTHORIZED') {
    return <Redirect to="/" />;
  }

  return (
    <div className={styles['flights-board']}>
      <FlightsInfo />
      <Slider />
      <FlightsBox />
    </div>
  );
};

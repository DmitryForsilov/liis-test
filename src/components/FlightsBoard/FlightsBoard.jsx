import React from 'react';
import styles from './styles.module.css';
import FlightsInfo from '../FlightsInfo/FlightsInfo';
import Slider from '../Slider/Slider';
import FlightsBox from '../FlightsBox/FlightsBox';

export default () => {
  console.log('render FlightsBoard');

  return (
    <div className={styles['flights-board']}>
      <FlightsInfo />
      <Slider />
      <FlightsBox />
    </div>
  );
};

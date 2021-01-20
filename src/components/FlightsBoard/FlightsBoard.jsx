import React from 'react';
import styles from './styles.module.css';
import FlightsInfo from '../FlightsInfo/FlightsInfo';
import Slider from '../Slider/Slider';
import FlightsBox from '../FlightsBox/FlightsBox';

export default () => (
  <div className={styles['flights-board']}>
    <FlightsInfo />
    <Slider />
    <FlightsBox />
  </div>
);

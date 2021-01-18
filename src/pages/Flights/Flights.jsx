import React from 'react';
import styles from './styles.module.css';
import Header from '../../components/Header/Header';
import FlightsBoard from '../../components/FlightsBoard/FlightsBoard';

export default () => {
  console.log('render flights page');

  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <FlightsBoard />
      </main>
    </div>
  );
};

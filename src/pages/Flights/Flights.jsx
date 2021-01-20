import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import styles from './styles.module.css';
import Header from '../../components/Header/Header';
import FlightsBoard from '../../components/FlightsBoard/FlightsBoard';

export default () => {
  const user = useSelector((state) => state.user);

  if (user.status === 'NOT_AUTHORIZED') {
    return <Redirect to="/" />;
  }

  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <FlightsBoard />
      </main>
    </div>
  );
};

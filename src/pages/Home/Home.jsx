import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './styles.module.css';
import AuthorizationForm from '../../components/AuthorizationForm/AuthorizationForm';

export default () => {
  const user = useSelector((state) => state.user);

  if (user.status === 'AUTHORIZED') {
    return <Redirect to="/flights" />;
  }

  return (
    <main className={styles.wrapper}>
      <AuthorizationForm />
    </main>
  );
};

import React from 'react';
import styles from './styles.module.css';
import AuthorizationForm from '../../components/AuthorizationForm/AuthorizationForm';

export default () => {
  console.log('render homepage');

  return (
    <div className={styles.wrapper}>
      <AuthorizationForm />
    </div>
  );
};

import React from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../../redux/slices';
import { removeLoginFromCookie } from '../../api';
import styles from './styles.module.css';

const generateOnClick = ({ dispatch }) => () => {
  const confirmation = window.confirm('Вы действительно хотите выйти?');

  if (confirmation) {
    dispatch(actions.setUser({ status: 'NOT_AUTHORIZED' }));
    removeLoginFromCookie();
  }
};

export default () => {
  const dispatch = useDispatch();

  return (
    <header className={styles.header}>
      <button className={styles['header__logout-button']} type="button" onClick={generateOnClick({ dispatch })}>
        <span className={styles['header__logout-button-text']}>Выйти</span>
        <svg width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            className={styles['header__logout-button-icon']}
            d="M8 20H4a2 2 0 01-2-2V4a2 2 0 012-2h4M15 16l5-5-5-5M20 11H8"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </header>
  );
};

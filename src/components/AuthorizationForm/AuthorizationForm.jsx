import React from 'react';
import { Redirect } from 'react-router-dom';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import * as yup from 'yup';
import { actions } from '../../redux/slices';
import * as api from '../../api';
import styles from './styles.module.css';

const renderForm = (formik) => {
  const loginError = formik.touched.login && formik.errors.login;
  const passwordError = formik.touched.password && formik.errors.password;

  const loginLabelClasses = cn(styles.form__label, {
    [styles.form__label_invalid]: loginError,
  });
  const passwordLabelClasses = cn(styles.form__label, {
    [styles.form__label_invalid]: passwordError,
  });
  const loginInputClasses = cn(styles.form__input, {
    [styles.form__input_invalid]: loginError,
  });
  const passwordInputClasses = cn(styles.form__input, {
    [styles.form__input_invalid]: passwordError,
  });

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit} noValidate>
      <h1 className={styles.form__title}>Simple Flight Check</h1>
      <div className={styles.form__group}>
        <label className={loginLabelClasses} htmlFor="login">Логин:</label>
        <input
          id="login"
          name="login"
          type="text"
          className={loginInputClasses}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.login}
        />
        <span className={styles['form__input-error']}>
          {loginError}
        </span>
      </div>
      <div className={styles.form__group}>
        <label className={passwordLabelClasses} htmlFor="password">Пароль:</label>
        <input
          id="password"
          name="password"
          type="text"
          className={passwordInputClasses}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        <span className={styles['form__input-error']}>
          {passwordError}
        </span>
      </div>
      <button className={styles['form__submit-button']} type="submit">Войти</button>
    </form>
  );
};

const generateValidationSchema = () => yup.object().shape({
  login: yup.string()
    .email('Введите имейл')
    .required('Логин - обязательное поле'),
  password: yup.string()
    .min(8, 'Пароль должен содержать минимум 8 символов')
    .matches(/^[^а-яё]+$/gi, 'Пароль не должен содержать кириллицу')
    .required('Пароль - обязательное поле'),
});

const generateOnSubmit = ({ dispatch, departureDate }) => ({ login }) => {
  dispatch(actions.fetchFlightsRequest({ departureDate }));
  dispatch(actions.setUser({ status: 'AUTHORIZED' }));
  api.setLoginToCookie(login);
};

export default () => {
  console.log('render form');

  const user = useSelector((state) => state.user);
  const departureDate = useSelector(({ flightOptions }) => flightOptions.departureDate);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    validationSchema: generateValidationSchema(),
    onSubmit: generateOnSubmit({ dispatch, departureDate }),
  });

  if (user.status === 'AUTHORIZED') {
    return <Redirect to="/flights" />;
  }

  return renderForm(formik);
};

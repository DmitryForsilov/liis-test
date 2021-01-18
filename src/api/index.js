import cookies from 'js-cookie';

const getLoginFromCookie = () => cookies.get('login');
const setLoginToCookie = (login) => cookies.set('login', login);
const removeLoginFromCookie = () => cookies.remove('login');

export {
  getLoginFromCookie,
  setLoginToCookie,
  removeLoginFromCookie,
};

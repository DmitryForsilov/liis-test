import cookies from 'js-cookie';
import axios from 'axios';

const getLoginFromCookie = () => cookies.get('login');
const setLoginToCookie = (login) => cookies.set('login', login);
const removeLoginFromCookie = () => cookies.remove('login');

const fetchFakeFlights = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');

  return res.data;
};

export {
  getLoginFromCookie,
  setLoginToCookie,
  removeLoginFromCookie,
  fetchFakeFlights,
};

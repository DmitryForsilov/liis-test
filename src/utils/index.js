const formatDate = (utcDate) => {
  const date = new Date(utcDate).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const regexp = /\s(\d{4})\s[а-яё]\./i;
  const formattedDate = date.replace(regexp, ' $1');

  return formattedDate;
};

const converStringDateToUtcInMs = (date) => Date.parse(date);

const getRundomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const getRandomTime = () => {
  const hours = getRundomNum(0, 24).toString();
  const minutes = getRundomNum(0, 60).toString();
  const formattedHours = hours.length === 1 ? `0${hours}` : hours;
  const formattedMinutes = minutes.length === 1 ? `0${minutes}` : minutes;

  return `${formattedHours}:${formattedMinutes}`;
};

const formatPrice = (value) => value.toLocaleString('ru-RU', {
  style: 'currency',
  currency: 'RUB',
  minimumFractionDigits: 0,
});

const getRandomPrice = () => getRundomNum(10000, 100000);

export {
  formatDate,
  getRandomTime,
  getRandomPrice,
  formatPrice,
  converStringDateToUtcInMs,
};

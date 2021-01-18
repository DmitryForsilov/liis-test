import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.min.css';
import styles from './styles.module.css';

import flightImage from '../../images/flight-in-the-sky.jpg';

// захардкодить в state или заюзать апи
const getImages = (count = 10) => {
  const images = [];

  for (let i = 0; i < count; i += 1) {
    images.push({ id: i, url: flightImage, description: 'super image' });
  }

  return images;
};

const renderSlide = (image) => (
  <SwiperSlide key={image.id} className={styles.slider__slide}>
    <img className={styles.slider__image} src={image.url} alt={image.description} />
  </SwiperSlide>
);

export default () => {
  console.log('render slider');

  // захардкодить в state или заюзать апи
  const images = getImages();

  return (
    <Swiper
      className={styles.slider}
      spaceBetween={12}
      slidesPerView="auto"
      roundLengths
    >
      {images.map(renderSlide)}
    </Swiper>
  );
};

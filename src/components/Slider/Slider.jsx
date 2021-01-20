import React from 'react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import styles from './styles.module.css';

const renderSlide = (image) => (
  <SwiperSlide key={image.id} className={styles.slider__slide}>
    <img className={styles.slider__image} src={image.url} alt={image.description} />
  </SwiperSlide>
);

export default () => {
  console.log('render slider');

  const travelImages = useSelector((state) => state.travelImages);

  return (
    <Swiper
      className={styles.slider}
      spaceBetween={12}
      slidesPerView="auto"
      roundLengths
    >
      {travelImages.map(renderSlide)}
    </Swiper>
  );
};

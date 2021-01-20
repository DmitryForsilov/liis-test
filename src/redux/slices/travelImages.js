/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import imageExample from '../../images/flight-in-the-sky.jpg';

// hardcoding initial images
const getImages = (count = 10) => {
  const images = [];

  for (let i = 0; i < count; i += 1) {
    images.push({ id: _.uniqueId(), url: imageExample, description: 'super image' });
  }

  return images;
};

const travelImagesSlice = createSlice({
  name: 'travelImages',
  initialState: getImages(),
  reducers: {
    setTravelImages(state, { payload: { status } }) {
      return { status };
    },
  },
});

export const travelImagesActions = {
  ...travelImagesSlice.actions,
};

export const travelImagesReducer = travelImagesSlice.reducer;

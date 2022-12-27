import { createReducer } from '@reduxjs/toolkit';
import filmCollection from '../mocks/films';
import { clearGenreAction, setGenreAction } from './action';

const initialState = {
  genre: 'All genres',
  filmList: filmCollection,
};

const updateStore = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenreAction, (state, action) => {
      state.genre = action.payload;
      state.filmList = filmCollection.filter((item) => item.genre === action.payload);
    })
    .addCase(clearGenreAction, (state) => {
      state.genre = 'All genres';
      state.filmList = filmCollection;
    });
});

export default updateStore;

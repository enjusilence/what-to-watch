import { createReducer } from '@reduxjs/toolkit';
import { FilmItems } from '../types/film-item';
import { clearGenreAction, loadFilmCollection, setFilmLoadingStatus, setGenreAction } from './action';

type InitialState = {
  genre: string;
  filmCollection: FilmItems;
  filmListSorted: FilmItems;
  isFilmCollectionLoading: boolean;
};

const initialState: InitialState = {
  genre: 'All genres',
  filmCollection: [],
  filmListSorted: [],
  isFilmCollectionLoading: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenreAction, (state, action) => {
      state.genre = action.payload;
      state.filmListSorted = state.filmCollection.filter((item) => item.genre === action.payload);
    })
    .addCase(clearGenreAction, (state) => {
      state.genre = 'All genres';
      state.filmListSorted = state.filmCollection;
    }).addCase(loadFilmCollection, (state, action) => {
      state.filmCollection = action.payload;
      state.filmListSorted = action.payload;
    }).addCase(setFilmLoadingStatus, (state, action) => {
      state.isFilmCollectionLoading = action.payload;
    });
});

export default reducer;

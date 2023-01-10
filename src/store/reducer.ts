import { createReducer } from '@reduxjs/toolkit';
import { FilmItems } from '../types/film-item';
import { UserInfo } from '../types/user-info';
import { clearGenreAction, loadFilmCollection, setAuthorizationStatus, setError, setFilmLoadingStatus, setGenreAction, setPendingAuthorizationStatus, setUserFilmCollection, setUserInfo } from './action';

type InitialState = {
  genre: string;
  filmCollection: FilmItems;
  filmListSorted: FilmItems;
  userFilmCollection: FilmItems;
  isFilmCollectionLoading: boolean;
  authorizationStatus: boolean;
  isAuthorizationStatusPending: boolean;
  userInfo: UserInfo;
  error: string | null;
};

const initialState: InitialState = {
  genre: 'All genres',
  filmCollection: [],
  filmListSorted: [],
  userFilmCollection: [],
  isFilmCollectionLoading: false,
  authorizationStatus: false,
  isAuthorizationStatusPending: false,
  userInfo: {
    avatarUrl: '',
    email: '',
    id: 0,
    name: '',
    token: '',
  },
  error: null,
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
    }).addCase(setUserInfo, (state, action) => {
      state.userInfo = action.payload;
    }).addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    }).addCase(setPendingAuthorizationStatus, (state, action) => {
      state.isAuthorizationStatusPending = action.payload;
    }).addCase(setError, (state, action) => {
      state.error = action.payload;
    }).addCase(setUserFilmCollection, (state, action) => {
      state.userFilmCollection = action.payload;
    });
});

export default reducer;

import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { FilmItems } from '../types/film-item';
import { AppDispatch, State } from '../types/state';
import { loadFilmCollection, setFilmLoadingStatus } from './action';

export const fetchFilmCollection = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilmCollection',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setFilmLoadingStatus(true));
    const {data} = await api.get<FilmItems>('/films');
    dispatch(loadFilmCollection(data));
    dispatch(setFilmLoadingStatus(false));
  },
);

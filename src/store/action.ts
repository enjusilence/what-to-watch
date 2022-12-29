import { createAction } from '@reduxjs/toolkit';
import { FilmItems } from '../types/film-item';

export const setGenreAction = createAction('SET_GENRE', (genre: string) => ({
  payload: genre,
}));

export const clearGenreAction = createAction('CLEAR_GENRE');

export const loadFilmCollection = createAction<FilmItems>('data/loadFilmCollection');

export const setFilmLoadingStatus = createAction<boolean>('data/setFilmLoadingStatus');

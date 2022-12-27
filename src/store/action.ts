import { createAction } from '@reduxjs/toolkit';

export const setGenreAction = createAction('SET_GENRE', (genre: string) => ({
  payload: genre,
}));

export const clearGenreAction = createAction('CLEAR_GENRE');

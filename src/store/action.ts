import { createAction } from '@reduxjs/toolkit';
import { FilmItems } from '../types/film-item';
import { UserInfo } from '../types/user-info';

export const setGenreAction = createAction<string>('filter/setGenre');

export const clearGenreAction = createAction<void>('filter/clear');

export const loadFilmCollection = createAction<FilmItems>('data/loadFilmCollection');

export const setFilmLoadingStatus = createAction<boolean>('data/setFilmLoadingStatus');

export const setAuthorizationStatus = createAction<boolean>('authorization/setStatus');

export const setUserInfo = createAction<UserInfo>('authorization/setUserInfo');

export const setError = createAction<string | null>('app/setError');

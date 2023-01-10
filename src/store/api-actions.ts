import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { store } from '.';
import { TIMEOUT_SHOW_ERROR } from '../const';
import { dropToken, saveToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { FilmItems } from '../types/film-item';
import { AppDispatch, State } from '../types/state';
import { UserInfo } from '../types/user-info';
import { loadFilmCollection, setAuthorizationStatus, setError, setFilmLoadingStatus, setPendingAuthorizationStatus, setUserFilmCollection, setUserInfo } from './action';

export const clearErrorAction = createAsyncThunk(
  'app/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchFilmCollectionAction = createAsyncThunk<void, undefined, {
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

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setPendingAuthorizationStatus(true));
    try {
      const {data} = await api.get<UserInfo>('/login');
      dispatch(setAuthorizationStatus(true));
      dispatch(setUserInfo(data));
    } finally {
      dispatch(setPendingAuthorizationStatus(false));
    }
  },
);

export const fetchUserFilmCollectionAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/fetchUserFilmCollection',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<FilmItems>('/favorite');
    dispatch(setUserFilmCollection(data));
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserInfo>('/login', {email, password});
    saveToken(data.token);
    dispatch(setAuthorizationStatus(true));
    dispatch(setUserInfo(data));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete<void>('/logout');
    dropToken();
    dispatch(setAuthorizationStatus(false));
    dispatch(setUserInfo({
      avatarUrl: '',
      email: '',
      id: 0,
      name: '',
      token: '',
    }));
  },
);

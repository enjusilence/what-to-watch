import { FilmItems } from '../types/film-item';
import { State } from '../types/state';
import { UserInfo } from '../types/user-info';

export const selectFilmCollection = (state: State): FilmItems => (state.filmCollection);

export const selectGenre = (state: State): string => (state.genre);

export const selectFilmListSorted = (state: State): FilmItems => (state.filmListSorted);

export const selectFilmLoadingStatus = (state: State): boolean => (state.isFilmCollectionLoading);

export const selectAuthorizationStatus = (state: State): boolean => (state.authorizationStatus);

export const selectPendingAuthorizationStatus = (state: State): boolean => (state.isAuthorizationStatusPending);

export const selectUserInfo = (state: State): UserInfo => (state.userInfo);

export const selectErrorMessage = (state: State): string | null => (state.error);

export const selectUserFilmCollection = (state: State): FilmItems => (state.userFilmCollection);

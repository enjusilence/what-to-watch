import { FilmItems } from '../types/film-item';
import { State } from '../types/state';

export const selectFilmCollection = (state: State): FilmItems => (state.filmCollection);

export const selectGenre = (state: State): string => (state.genre);

export const selectFilmListSorted = (state: State): FilmItems => (state.filmListSorted);

export const selectFilmLoadingStatus = (state: State): boolean => (state.isFilmCollectionLoading);

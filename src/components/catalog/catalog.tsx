import React from 'react';
import store from '../../store';
import { clearGenreAction, setGenreAction } from '../../store/action';
import FilmItem from '../../types/film-item';
import FilmList from '../film-list/film-list';
import GenreList from '../genre-list/genre-list';

type CatalogProps = {
  filmCollection: FilmItem[];
}

function Catalog({filmCollection}: CatalogProps): JSX.Element {
  const getCurrentGenre = (): string => (store.getState().genre);
  const getCurrentList = (): FilmItem[] => (store.getState().filmList);
  const [currentGenre, setCurrentGenre] = React.useState(getCurrentGenre());
  const [currentList, setCurrentList] = React.useState(getCurrentList());

  const handleOnClick = (genreName: string, evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    evt.preventDefault();
    if (genreName === 'All genres') {
      store.dispatch(clearGenreAction());
    } else {
      store.dispatch(setGenreAction(genreName));
    }
    setCurrentGenre(getCurrentGenre());
    setCurrentList(getCurrentList());
  };

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <GenreList filmCollection={filmCollection} currentGenre={currentGenre} handleOnClick={handleOnClick}/>
      <FilmList filmCollection={currentList} cardAmount={8} />
      <div className="catalog__more">
        <button className="catalog__button" type="button">
          Show more
        </button>
      </div>
    </section>
  );
}

export default Catalog;

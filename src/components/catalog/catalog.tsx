import React from 'react';
import { useSelector } from 'react-redux';
import { store } from '../../store';
import { clearGenreAction, setGenreAction } from '../../store/action';
import { selectFilmCollection, selectFilmListSorted, selectGenre } from '../../store/selectors';
import { FilmItems } from '../../types/film-item';
import FilmList from '../film-list/film-list';
import GenreList from '../genre-list/genre-list';
import ShowMore from '../catalog-show-more/catalog-show-more';

function Catalog(): JSX.Element {
  const filmCollection: FilmItems = useSelector(selectFilmCollection);
  const currentList: FilmItems = useSelector(selectFilmListSorted);
  const currentGenre: string = useSelector(selectGenre);

  const [cardAmount, setCardAmount] = React.useState(8);

  const isShowMoreVisible = (): boolean => (currentList.length > cardAmount);

  const handleOnClickGenreList = (genreName: string, evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    evt.preventDefault();
    if (genreName === 'All genres') {
      store.dispatch(clearGenreAction());
    } else {
      store.dispatch(setGenreAction(genreName));
    }
  };

  const handleOnClickShowMore = () => {
    setCardAmount(cardAmount + 8);
  };

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <GenreList filmCollection={filmCollection} currentGenre={currentGenre} handleOnClick={handleOnClickGenreList}/>
      <FilmList currentList={currentList} cardAmount={cardAmount} />
      {(isShowMoreVisible() && <ShowMore handleOnClick={handleOnClickShowMore}/>)}
    </section>
  );
}

export default Catalog;

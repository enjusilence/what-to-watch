import React from 'react';
import { Link } from 'react-router-dom';
import { FilmItems } from '../../types/film-item';

type GenreListProps = {
  filmCollection: FilmItems;
  currentGenre: string;
  handleOnClick: (genreName: string, evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

function GenreList({filmCollection, currentGenre, handleOnClick}: GenreListProps): JSX.Element {
  const genreList: string[] = ['All genres'].concat([...new Set(filmCollection.map((item) => item.genre))].sort());

  return (
    <ul className="catalog__genres-list">
      {genreList.map((genreName) =>
        (
          <li className={`catalog__genres-item ${(currentGenre === genreName ? 'catalog__genres-item--active' : '')}`} key={genreName}>
            <Link to="#" onClick={(evt) => handleOnClick(genreName, evt)} className="catalog__genres-link">
              {genreName}
            </Link>
          </li>
        )
      )}
    </ul>
  );
}

export default GenreList;

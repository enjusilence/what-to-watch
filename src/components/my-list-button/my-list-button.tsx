import { FC } from 'react';
import { useSelector } from 'react-redux';
import { api, store } from '../../store';
import { fetchUserFilmCollectionAction } from '../../store/api-actions';
import { selectUserFilmCollection } from '../../store/selectors';
import { FilmItem } from '../../types/film-item';

const IsFavorite = {
  0: '#in-list',
  1: '#add',
};

type MyListButtonProps = {
  filmID: number;
};

export const MyListButton: FC<MyListButtonProps> = ({filmID}): JSX.Element => {
  const userFilmCollection = useSelector(selectUserFilmCollection);
  const filmInListAmount = userFilmCollection.length;
  let isFavorite = userFilmCollection.map((film) => film.id).includes(filmID);
  const isFavoriteNum = (isFavorite ? 0 : 1);

  const addFilm = async (): Promise<void> => {
    const {data} = await api.post<FilmItem>(`/favorite/${filmID}/${isFavoriteNum}`);
    store.dispatch(fetchUserFilmCollectionAction());
    isFavorite = data.isFavorite;
  };

  return (
    <button onClick={() => void addFilm()} className="btn btn--list film-card__button" type="button">
      <svg viewBox="0 0 19 20" width={19} height={20}>
        <use xlinkHref={IsFavorite[isFavoriteNum]} />
      </svg>
      <span>My list</span>
      <span className="film-card__count">{filmInListAmount}</span>
    </button>
  );
};

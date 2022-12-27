import React from 'react';
import filmItem from '../../types/film-item';
import SmallFilmCard from '../small-film-card/small-film-card';

type FilmListProps = {
  currentList: filmItem[];
  cardAmount: number;
}

function FilmList({currentList, cardAmount}: FilmListProps): JSX.Element {
  const [activeCardID, setActiveCardID] = React.useState(0);

  const onMouseEnter = (filmID: number) => {
    setActiveCardID(filmID);
  };

  const onMouseLeave = () => {
    setActiveCardID(0);
  };

  return (
    <div className="catalog__films-list">
      {
        currentList.slice(0, cardAmount).map(
          ({srcImage, srcVideo, title, filmID}) =>
            (
              <SmallFilmCard
                isActive={activeCardID === filmID}
                srcImage={srcImage}
                srcVideo={srcVideo}
                title={title}
                filmID={filmID}
                key={filmID}
                onMouseEnter={() => onMouseEnter(filmID)}
                onMouseLeave={onMouseLeave}
              />
            )
        )
      }
    </div>
  );
}

export default FilmList;

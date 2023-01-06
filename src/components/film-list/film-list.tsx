import { useState } from 'react';
import { FilmItems } from '../../types/film-item';
import SmallFilmCard from '../small-film-card/small-film-card';

type FilmListProps = {
  currentList: FilmItems;
  cardAmount: number;
}

function FilmList({currentList, cardAmount}: FilmListProps): JSX.Element {
  const [activeCardID, setActiveCardID] = useState(0);

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
          ({previewImage, previewVideoLink, name, id}) =>
            (
              <SmallFilmCard
                isActive={activeCardID === id}
                srcImage={previewImage}
                srcVideo={previewVideoLink}
                title={name}
                filmID={id}
                key={id}
                onMouseEnter={() => onMouseEnter(id)}
                onMouseLeave={onMouseLeave}
              />
            )
        )
      }
    </div>
  );
}

export default FilmList;

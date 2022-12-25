import React from 'react';
import filmItem from '../../types/film-item';
import SmallFilmCard from '../small-film-card/small-film-card';

type FilmListProps = {
  filmCollection: filmItem[];
}

function FilmList({filmCollection}: FilmListProps): JSX.Element {
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
        filmCollection.map(
          ({srcImage, srcVideo, title, filmID}) => <SmallFilmCard isActive={activeCardID === filmID} srcImage={srcImage} srcVideo={srcVideo} title={title} filmID={filmID} key={filmID} onMouseEnter={() => onMouseEnter(filmID)} onMouseLeave={onMouseLeave}/>
        )
      }
      <h1>{activeCardID}</h1>
    </div>
  );
}

export default FilmList;

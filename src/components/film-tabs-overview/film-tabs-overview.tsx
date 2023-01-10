import { FilmItem } from '../../types/film-item';

type FilmTabsOverviewProps = {
  filmInfo: FilmItem;
}

const RATING_LEVELS = {
  BAD: 'Bad',
  NORMAL: 'Normal',
  GOOD: 'Good',
  VERY_GOOD: 'Very good',
  AWESOME: 'Awesome',
};

function FilmTabsOverview({filmInfo}: FilmTabsOverviewProps): JSX.Element {
  const {rating, scoresCount, director, starring} = filmInfo;

  const getRatingLevel = (): string => {
    if (rating < 3) {
      return RATING_LEVELS.BAD;
    } else if (rating < 5) {
      return RATING_LEVELS.NORMAL;
    } else if (rating < 8) {
      return RATING_LEVELS.GOOD;
    } else if (rating < 10) {
      return RATING_LEVELS.VERY_GOOD;
    } else if (rating === 10) {
      return RATING_LEVELS.AWESOME;
    } else {throw 'rating error';}
  };

  const ratingLevel = getRatingLevel();

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{ratingLevel}</span>
          <span className="film-rating__count">{scoresCount} ratings</span>
        </p>
      </div>
      <div className="film-card__text">
        {filmInfo.description}
        <p className="film-card__director">
          <strong>Director: {director}</strong>
        </p>
        <p className="film-card__starring">
          <strong>
            Starring: {starring.join(', ')}
          </strong>
        </p>
      </div>
    </>
  );
}

export default FilmTabsOverview;

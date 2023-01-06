import { FilmItem } from '../../../../types/film-item';

type FilmTabsOverviewProps = {
  filmInfo: FilmItem;
}

function FilmTabsOverview({filmInfo}: FilmTabsOverviewProps): JSX.Element {
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{filmInfo.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">{filmInfo.scoresCount} ratings</span>
        </p>
      </div>
      <div className="film-card__text">
        {filmInfo.description}
        <p className="film-card__director">
          <strong>Director: {filmInfo.director}</strong>
        </p>
        <p className="film-card__starring">
          <strong>
            Starring: {filmInfo.starring.join(', ')}
          </strong>
        </p>
      </div>
    </>
  );
}

export default FilmTabsOverview;

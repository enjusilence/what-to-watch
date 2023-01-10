import { FilmItem } from '../../types/film-item';

type FilmTabsDetailsProps = {
  filmInfo: FilmItem;
}

function FilmTabsDetails({filmInfo}: FilmTabsDetailsProps): JSX.Element {
  const {director, starring, runTime, genre, released} = filmInfo;

  const convertNumberToTime = (): string => `${Math.floor(runTime / 60)}h ${runTime % 60}m`;

  const runTimeString = convertNumberToTime();

  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value" dangerouslySetInnerHTML={{__html: starring.join(', </br>')}}/>
        </p>
      </div>
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{runTimeString}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{released}</span>
        </p>
      </div>
    </div>
  );
}

export default FilmTabsDetails;

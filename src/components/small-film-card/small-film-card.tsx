import { Link } from 'react-router-dom';

type SmallFilmCardProps = {
  src: string;
  title: string;
  filmID: number;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

function SmallFilmCard({src, title, filmID, onMouseEnter, onMouseLeave}: SmallFilmCardProps): JSX.Element {
  return (
    <article onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img
          src={src}
          alt={title}
          width={280}
          height={175}
        />
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${filmID}`} className="small-film-card__link">
          {title}
        </Link>
      </h3>
    </article>
  );
}

export default SmallFilmCard;

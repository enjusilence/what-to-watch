import { Link, useNavigate } from 'react-router-dom';
import SmallFilmCardWrapper from '../small-film-card-wrapper/small-film-card-wrapper';

type SmallFilmCardProps = {
  isActive: boolean;
  srcImage: string;
  srcVideo: string;
  title: string;
  filmID: number;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

function SmallFilmCard({isActive, srcImage, srcVideo, title, filmID, onMouseEnter, onMouseLeave}: SmallFilmCardProps): JSX.Element {
  const navigate = useNavigate();
  const onMouseClick = () => navigate(`/films/${filmID}`);

  return (
    <article onClick={onMouseClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <SmallFilmCardWrapper isActive={isActive} srcVideo={srcVideo} srcImage={srcImage} title={title} />
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

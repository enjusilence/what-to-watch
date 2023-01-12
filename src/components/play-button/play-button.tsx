import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

type PlayButtonProps = {
  filmID: number;
}

export const PlayButton: FC<PlayButtonProps> = ({filmID}) => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(`/player/${filmID}`)} className="btn btn--play film-card__button" type="button">
      <svg viewBox="0 0 19 19" width={19} height={19}>
        <use xlinkHref="#play-s" />
      </svg>
      <span>Play</span>
    </button>
  );
};

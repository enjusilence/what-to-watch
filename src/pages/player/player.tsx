import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Spinner } from '../../components/spinner/spinner';
import { VideoPlayer } from '../../components/video-player/video-player';
import { api } from '../../store';
import { FilmItem } from '../../types/film-item';
import Page404 from '../page404/page404';

function Player(): JSX.Element {
  const [isFilmExist, setIsFilmExist] = useState(true);
  const [filmInfo, setFilmInfo] = useState<FilmItem | null>(null);
  const { id } = useParams();
  const filmID = Number(id);


  const fetchFilmByID = async (): Promise<void> => {
    try {
      const {data} = await api.get<FilmItem>(`/films/${filmID}`);
      setFilmInfo(data);
    } catch (error) {
      setIsFilmExist(false);
    }
  };

  useEffect(() => {
    fetchFilmByID();
  }, []);

  if (!isFilmExist) {
    return <Page404 />;
  } else if (filmInfo === null) {
    return <Spinner />;
  } else {
    return <VideoPlayer filmInfo={filmInfo}/>;
  }
}

export default Player;

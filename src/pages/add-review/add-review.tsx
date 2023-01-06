import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import AddReviewForm from '../../components/add-review-form/add-review-form';
import { UserBlock } from '../../components/user-block/user-block';
import { api } from '../../store';
import { FilmItem } from '../../types/film-item';
import Page404 from '../page404/page404';

const voidFilmItem: FilmItem = {
  id: 0,
  name: '',
  posterImage: '',
  previewImage: '',
  backgroundImage: '',
  backgroundColor: '',
  videoLink: '',
  previewVideoLink: '',
  description: '',
  rating: 0,
  scoresCount: 0,
  director: '',
  starring: [''],
  runTime: 0,
  genre: '',
  released: 0,
  isFavorite: false,
};

function AddReview(): JSX.Element {
  const [isFilmExist, setIsFilmExist] = useState(true);
  const [filmInfo, setFilmInfo] = useState(voidFilmItem);
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
  }, [id]);

  return (
    !isFilmExist
      ? <Page404 />
      : (
        <section className="film-card film-card--full">
          <div className="film-card__header">
            <div className="film-card__bg">
              <img
                src={filmInfo.backgroundImage}
                alt={filmInfo.name}
              />
            </div>
            <h1 className="visually-hidden">WTW</h1>
            <header className="page-header">
              <div className="logo">
                <a href="main.html" className="logo__link">
                  <span className="logo__letter logo__letter--1">W</span>
                  <span className="logo__letter logo__letter--2">T</span>
                  <span className="logo__letter logo__letter--3">W</span>
                </a>
              </div>
              <nav className="breadcrumbs">
                <ul className="breadcrumbs__list">
                  <li className="breadcrumbs__item">
                    <a href="film-page.html" className="breadcrumbs__link">
                      {filmInfo.name}
                    </a>
                  </li>
                  <li className="breadcrumbs__item">
                    <a className="breadcrumbs__link">Add review</a>
                  </li>
                </ul>
              </nav>
              <UserBlock />
            </header>
            <div className="film-card__poster film-card__poster--small">
              <img
                src={filmInfo.posterImage}
                alt={filmInfo.name}
                width={218}
                height={327}
              />
            </div>
          </div>
          <AddReviewForm filmID={filmID}/>
        </section>
      )
  );
}

export default AddReview;

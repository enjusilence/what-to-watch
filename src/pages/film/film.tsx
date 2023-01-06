import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import FilmList from '../../components/film-list/film-list';
import FilmTabs from '../../components/film-tabs/film-tabs';
import { UserBlock } from '../../components/user-block/user-block';
import { api } from '../../store';
import { selectAuthorizationStatus } from '../../store/selectors';
import { FilmItems, FilmItem } from '../../types/film-item';
import { ReviewComment, ReviewComments } from '../../types/review-comment';
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

const voidComment: ReviewComment = {
  comment: '',
  date: '',
  id: 0,
  rating: 0,
  user: {
    id: 0,
    name: '',
  },
};

function Film(): JSX.Element {
  const [isFilmExist, setIsFilmExist] = useState(true);
  const [filmInfo, setFilmInfo] = useState(voidFilmItem);
  const [similarFilms, setSimilarFilms] = useState([voidFilmItem]);
  const [commentList, setCommentList] = useState([voidComment]);
  const { id } = useParams();
  const filmID = Number(id);

  const isAuthorized = useSelector(selectAuthorizationStatus);

  const fetchFilmByID = async (): Promise<void> => {
    try {
      const {data} = await api.get<FilmItem>(`/films/${filmID}`);
      setFilmInfo(data);
    } catch (error) {
      setIsFilmExist(false);
    }
  };

  const fetchSimilarFilmsByID = async (): Promise<void> => {
    const {data} = await api.get<FilmItems>(`/films/${filmID}/similar`);
    setSimilarFilms(data);
  };

  const fetchComments = async (): Promise<void> => {
    const {data} = await api.get<ReviewComments>(`/comments/${filmID}`);
    setCommentList(data);
  };

  useEffect(() => {
    fetchFilmByID();
    fetchSimilarFilmsByID();
    fetchComments();
    window.scrollTo(0, 0);
  }, [id]);

  return(
    !isFilmExist
      ? <Page404 />
      : (
        <React.Fragment>
          <section className="film-card film-card--full" style={{backgroundColor: filmInfo.backgroundColor}}>
            <div className="film-card__hero">
              <div className="film-card__bg">
                <img
                  src={filmInfo.backgroundImage}
                  alt={filmInfo.name}
                />
              </div>
              <h1 className="visually-hidden">WTW</h1>
              <header className="page-header film-card__head">
                <div className="logo">
                  <Link to="/" className="logo__link">
                    <span className="logo__letter logo__letter--1">W</span>
                    <span className="logo__letter logo__letter--2">T</span>
                    <span className="logo__letter logo__letter--3">W</span>
                  </Link>
                </div>
                <UserBlock />
              </header>
              <div className="film-card__wrap">
                <div className="film-card__desc">
                  <h2 className="film-card__title">{filmInfo.name}</h2>
                  <p className="film-card__meta">
                    <span className="film-card__genre">{filmInfo.genre}</span>
                    <span className="film-card__year">{filmInfo.released}</span>
                  </p>
                  <div className="film-card__buttons">
                    <button className="btn btn--play film-card__button" type="button">
                      <svg viewBox="0 0 19 19" width={19} height={19}>
                        <use xlinkHref="#play-s" />
                      </svg>
                      <span>Play</span>
                    </button>
                    <button className="btn btn--list film-card__button" type="button">
                      <svg viewBox="0 0 19 20" width={19} height={20}>
                        <use xlinkHref="#add" />
                      </svg>
                      <span>My list</span>
                      <span className="film-card__count">9</span>
                    </button>
                    {
                      isAuthorized
                        ? (
                          <Link to="add-review" className="btn film-card__button">
                              Add review
                          </Link>
                        )
                        : ''
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className="film-card__wrap film-card__translate-top">
              <div className="film-card__info">
                <div className="film-card__poster film-card__poster--big">
                  <img
                    src={filmInfo.posterImage}
                    alt={filmInfo.name}
                    width={218}
                    height={327}
                  />
                </div>
                <FilmTabs filmInfo={filmInfo} commentList={commentList}/>
              </div>
            </div>
          </section>
          <div className="page-content">
            <section className="catalog catalog--like-this">
              <h2 className="catalog__title">More like this</h2>
              <FilmList currentList={similarFilms} cardAmount={4}/>
            </section>
            <footer className="page-footer">
              <div className="logo">
                <a href="main.html" className="logo__link logo__link--light">
                  <span className="logo__letter logo__letter--1">W</span>
                  <span className="logo__letter logo__letter--2">T</span>
                  <span className="logo__letter logo__letter--3">W</span>
                </a>
              </div>
              <div className="copyright">
                <p>© 2019 What to watch Ltd.</p>
              </div>
            </footer>
          </div>
        </React.Fragment>
      )
  );
}

export default Film;

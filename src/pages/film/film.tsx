import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import FilmList from '../../components/film-list/film-list';
import FilmTabs from '../../components/film-tabs/film-tabs';
import { Footer } from '../../components/footer/footer';
import { Header, HeaderType } from '../../components/header/header';
import { Logo } from '../../components/logo/logo';
import { MyListButton } from '../../components/my-list-button/my-list-button';
import { PlayButton } from '../../components/play-button/play-button';
import { Spinner } from '../../components/spinner/spinner';
import { UserBlock } from '../../components/user-block/user-block';
import { AppRoute } from '../../const';
import { api } from '../../store';
import { selectAuthorizationStatus } from '../../store/selectors';
import { FilmItems, FilmItem } from '../../types/film-item';
import { ReviewComments } from '../../types/review-comment';
import Page404 from '../page404/page404';

function Film(): JSX.Element {
  const [isFilmExist, setIsFilmExist] = useState(true);
  const [filmInfo, setFilmInfo] = useState<FilmItem | null>(null);
  const [similarFilms, setSimilarFilms] = useState<FilmItems>([]);
  const [commentList, setCommentList] = useState<ReviewComments>([]);
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

  if (!isFilmExist) {
    return <Page404 />;
  } else if (filmInfo === null) {
    return <Spinner />;
  } else {
    return (
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
            <Header headerType={HeaderType.FilmCard}>
              <Logo />
              <UserBlock />
            </Header>
            <div className="film-card__wrap">
              <div className="film-card__desc">
                <h2 className="film-card__title">{filmInfo.name}</h2>
                <p className="film-card__meta">
                  <span className="film-card__genre">{filmInfo.genre}</span>
                  <span className="film-card__year">{filmInfo.released}</span>
                </p>
                <div className="film-card__buttons">
                  <PlayButton filmID={filmInfo.id} />
                  { isAuthorized && <MyListButton filmID={filmInfo.id} /> }
                  { isAuthorized &&
                    <Link to={AppRoute.AddReview} className="btn film-card__button">
                        Add review
                    </Link> }
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
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default Film;

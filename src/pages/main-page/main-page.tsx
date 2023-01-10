import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Catalog from '../../components/catalog/catalog';
import { Footer } from '../../components/footer/footer';
import { Header, HeaderType } from '../../components/header/header';
import { Logo } from '../../components/logo/logo';
import { MyListButton } from '../../components/my-list-button/my-list-button';
import { Spinner } from '../../components/spinner/spinner';
import { UserBlock } from '../../components/user-block/user-block';
import { api } from '../../store';
import { selectAuthorizationStatus, selectFilmLoadingStatus } from '../../store/selectors';
import { FilmItem } from '../../types/film-item';

function MainPage(): JSX.Element {
  const [promoFilmInfo, setPromoFilmInfo] = useState<FilmItem | null>(null);
  const isAuthorized = useSelector(selectAuthorizationStatus);

  const isFilmCollectionLoading: boolean = useSelector(selectFilmLoadingStatus);

  const fetchPromoFilm = async (): Promise<void> => {
    const {data} = await api.get<FilmItem>('/promo');
    setPromoFilmInfo(data);
  };

  useEffect(() => {
    fetchPromoFilm();
  }, []);

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img
            src={promoFilmInfo?.backgroundImage}
            alt={promoFilmInfo?.name}
          />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <Header headerType={HeaderType.FilmCard}>
          <Logo />
          <UserBlock />
        </Header>
        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img
                src={promoFilmInfo?.posterImage}
                alt={promoFilmInfo?.name}
                width={218}
                height={327}
              />
            </div>
            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilmInfo?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilmInfo?.genre}</span>
                <span className="film-card__year">{promoFilmInfo?.released}</span>
              </p>
              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                {isAuthorized && (promoFilmInfo !== null) && <MyListButton filmID={promoFilmInfo.id} />}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        {
          isFilmCollectionLoading
            ? <Spinner />
            : <Catalog />
        }
        <Footer />
      </div>
    </>
  );
}

export default MainPage;

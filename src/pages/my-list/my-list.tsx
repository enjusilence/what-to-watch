import { useEffect, useState } from 'react';
import FilmList from '../../components/film-list/film-list';
import { Footer } from '../../components/footer/footer';
import { Header, HeaderType } from '../../components/header/header';
import { Logo } from '../../components/logo/logo';
import { UserBlock } from '../../components/user-block/user-block';
import { api } from '../../store';
import { FilmItems } from '../../types/film-item';

function MyList(): JSX.Element {
  const [myFilmCollection, setMyFilmCollection] = useState<FilmItems>([]);

  const fetchMyFilmCollection = async (): Promise<void> => {
    const {data} = await api.get<FilmItems>('/favorite');
    setMyFilmCollection(data);
  };

  useEffect(() => {
    fetchMyFilmCollection();
  }, []);

  return (
    <div className="user-page">
      <Header headerType={HeaderType.UserPage}>
        <Logo />
        <h1 className="page-title user-page__title">
          My list <span className="user-page__film-count">{myFilmCollection?.length}</span>
        </h1>
        <UserBlock />
      </Header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmList currentList={myFilmCollection} cardAmount={16}/>
      </section>
      <Footer />
    </div>
  );
}

export default MyList;

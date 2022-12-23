import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { AppRoute } from '../../const';
import AddReview from '../../pages/add-review/add-review';
import Film from '../../pages/film/film';
import MainPage from '../../pages/main-page/main-page';
import Page404 from '../../pages/page404/page404';
import Player from '../../pages/player/player';
import SignIn from '../../pages/sign-in/sign-in';
import filmItem from '../../types/film-item';
import videoItem from '../../types/video-item';
import FilmDetails from '../film/details';
import FilmOverview from '../film/overview';
import IsSignedIn from '../is-signed-in/is-signed-in';

type AppProps = {
  promoTitle: string;
  promoGenre: string;
  promoReleaseYear: string;
  userID: number;
  filmCollection: filmItem[];
  videoCollection: videoItem[];
}

function App({promoTitle, promoGenre, promoReleaseYear, userID, filmCollection, videoCollection}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root}>
          <Route index element={<MainPage promoGenre={promoGenre} promoReleaseYear={promoReleaseYear} promoTitle={promoTitle} filmCollection={filmCollection}/>}/>
          <Route path={AppRoute.MyList} element={<IsSignedIn userID={userID} filmCollection={filmCollection}/>}/>
          <Route path={AppRoute.Player} element={<Player videoCollection={videoCollection}/>}/>
          <Route path={AppRoute.SignIn} element={<SignIn />}/>
          <Route path={AppRoute.Films}>
            <Route index element={<Film />}/>
            <Route path={AppRoute.AddReview} element={<AddReview />}/>
          </Route>
          <Route path='*' element={<Page404 />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

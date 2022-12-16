import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { AppRoute } from '../../const';
import AddReview from '../../pages/add-review/add-review';
import Film from '../../pages/film/film';
import MainPage from '../../pages/main-page/main-page';
import Page404 from '../../pages/page404/page404';
import Player from '../../pages/player/player';
import SignIn from '../../pages/sign-in/sign-in';
import IsSignedIn from '../is-signed-in/is-signed-in';

type AppProps = {
  promoTitle: string;
  promoGenre: string;
  promoReleaseYear: string;
  userID: number;
}

function App(props: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root}>
          <Route index element={<MainPage promoGenre={props.promoGenre} promoReleaseYear={props.promoReleaseYear} promoTitle={props.promoTitle}/>}/>
          <Route path={AppRoute.MyList} element={<IsSignedIn userID={props.userID}/>}/>
          <Route path={AppRoute.Player} element={<Player />}/>
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

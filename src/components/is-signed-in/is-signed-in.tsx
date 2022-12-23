import MyList from '../../pages/my-list/my-list';
import SignIn from '../../pages/sign-in/sign-in';
import filmItem from '../../types/film-item';

type IsSignedInProps = {
  userID: number;
  filmCollection: filmItem[];
}

function IsSignedIn({userID, filmCollection}: IsSignedInProps): JSX.Element {
  return userID ? <MyList filmCollection={filmCollection}/> : <SignIn />;
}

export default IsSignedIn;

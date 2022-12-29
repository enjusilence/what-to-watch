import MyList from '../../pages/my-list/my-list';
import SignIn from '../../pages/sign-in/sign-in';
import { FilmItems } from '../../types/film-item';

type IsSignedInProps = {
  userID: number;
}

function IsSignedIn({userID}: IsSignedInProps): JSX.Element {
  return (userID
    ? <MyList />
    : <SignIn />);
}

export default IsSignedIn;

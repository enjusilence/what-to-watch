import MyList from '../../pages/my-list/my-list';
import SignIn from '../../pages/sign-in/sign-in';

type IsSignedInProps = {
  userID: number;
}

function IsSignedIn(props: IsSignedInProps): JSX.Element {
  return props.userID ? <MyList /> : <SignIn />;
}

export default IsSignedIn;

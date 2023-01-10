import { ChangeEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Footer } from '../../components/footer/footer';
import { Header, HeaderType } from '../../components/header/header';
import { Logo } from '../../components/logo/logo';
import { UserBlock } from '../../components/user-block/user-block';
import { AppRoute } from '../../const';
import { store } from '../../store';
import { loginAction } from '../../store/api-actions';
import { selectAuthorizationStatus } from '../../store/selectors';

function SignIn(): JSX.Element {
  const [signInData, setSignInData] = useState({
    email: '',
    password: '',
  });

  const isAuthorized: boolean = useSelector(selectAuthorizationStatus);

  if (isAuthorized) {
    return <Navigate to={AppRoute.Root} />;
  }

  const fieldChangeHandle = (evt: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = evt.target;
    setSignInData({...signInData, [name]: value});
  };

  const onSubmit = () => {
    store.dispatch(loginAction(signInData));
  };

  return (
    <div className="user-page">
      <Header headerType={HeaderType.UserPage}>
        <Logo />
        <UserBlock />
      </Header>
      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form">
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                onChange={fieldChangeHandle}
                value={signInData.email}
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="email"
                id="user-email"
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-email"
              >
                Email address
              </label>
            </div>
            <div className="sign-in__field">
              <input
                onChange={fieldChangeHandle}
                value={signInData.password}
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="password"
                id="user-password"
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-password"
              >
                Password
              </label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button onClick={() => onSubmit()} className="sign-in__btn" type="button">
              Sign in
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default SignIn;

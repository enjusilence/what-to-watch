import { ChangeEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
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
      <header className="page-header user-page__head">
        <div className="logo">
          <a href="main.html" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>
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
  );
}

export default SignIn;

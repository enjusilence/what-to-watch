import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { store } from '../../store';
import { logoutAction } from '../../store/api-actions';
import { selectAuthorizationStatus, selectUserInfo } from '../../store/selectors';

export function UserBlock(): JSX.Element {
  const isAuthorized: boolean = useSelector(selectAuthorizationStatus);
  const avatarUrl: string = useSelector(selectUserInfo).avatarUrl;

  const signOut = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    store.dispatch(logoutAction());
  };

  if (!isAuthorized) {
    return (
      <div className="user-block">
        <Link to={AppRoute.SignIn} className="user-block__link">
          Sign in
        </Link>
      </div>
    );
  }


  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <Link to={AppRoute.MyList}>
            <img
              src={avatarUrl}
              alt="User avatar"
              width={63}
              height={63}
            />
          </Link>
        </div>
      </li>
      <li className="user-block__item">
        <Link to="#" onClick={(evt) => signOut(evt)} className="user-block__link">Sign out</Link>
      </li>
    </ul>
  );
}

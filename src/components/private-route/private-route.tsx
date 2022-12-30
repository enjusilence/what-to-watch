import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { selectAuthorizationStatus } from '../../store/selectors';

type PrivateRouteProps = {
  children: JSX.Element;
};

export function PrivateRoute({ children }: PrivateRouteProps): JSX.Element {
  const isAuthorized: boolean = useSelector(selectAuthorizationStatus);

  if (!isAuthorized) {
    return <Navigate to={AppRoute.SignIn} />;
  }

  return children;
}

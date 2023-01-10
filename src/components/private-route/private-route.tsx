import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { selectAuthorizationStatus, selectPendingAuthorizationStatus } from '../../store/selectors';
import { Spinner } from '../spinner/spinner';

type PrivateRouteProps = {
  children: JSX.Element;
};

export function PrivateRoute({ children }: PrivateRouteProps): JSX.Element {
  const isAuthorizationPending: boolean = useSelector(selectPendingAuthorizationStatus);
  const isAuthorized: boolean = useSelector(selectAuthorizationStatus);

  if (isAuthorizationPending) {
    return <Spinner />;
  } else if (!isAuthorized) {
    return <Navigate to={AppRoute.SignIn} />;
  } else {
    return children;
  }
}

import { useSelector } from 'react-redux';
import { selectErrorMessage } from '../../store/selectors';

export function ErrorMessage(): JSX.Element | null {
  const error = useSelector(selectErrorMessage);

  return (error)
    ? <div className='error-message'>{error}</div>
    : null;
}

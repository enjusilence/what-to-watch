import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { ErrorMessage } from './components/error-message/error-message';
import { store } from './store';
import { checkAuthAction, fetchFilmCollectionAction, fetchUserFilmCollectionAction } from './store/api-actions';

store.dispatch(fetchFilmCollectionAction());
store.dispatch(checkAuthAction());
store.dispatch(fetchUserFilmCollectionAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App promoGenre='Drama' promoReleaseYear='2014' promoTitle='The Grand Budapest Hotel' userID={1}/>
    </Provider>
  </React.StrictMode>,
);

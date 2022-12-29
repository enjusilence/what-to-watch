import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { store } from './store';
import { fetchFilmCollection } from './store/api-actions';

store.dispatch(fetchFilmCollection());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App promoGenre='Drama' promoReleaseYear='2014' promoTitle='The Grand Budapest Hotel' userID={1}/>
    </Provider>
  </React.StrictMode>,
);

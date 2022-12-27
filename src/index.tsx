import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import filmCollection from './mocks/films';
import mockedVideos from './mocks/videos';
import store from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App promoGenre='Drama' promoReleaseYear='2014' promoTitle='The Grand Budapest Hotel' userID={1} filmCollection={filmCollection} videoCollection={mockedVideos}/>
    </Provider>
  </React.StrictMode>,
);

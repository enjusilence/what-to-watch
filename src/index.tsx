import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import filmCollection from './mocks/films';
import mockedVideos from './mocks/videos';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App promoGenre='Drama' promoReleaseYear='2014' promoTitle='The Grand Budapest Hotel' userID={1} filmCollection={filmCollection} videoCollection={mockedVideos}/>
  </React.StrictMode>,
);

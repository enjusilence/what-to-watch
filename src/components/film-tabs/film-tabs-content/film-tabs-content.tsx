import FilmTabsDetails from './film-tabs-details';
import FilmTabsOverview from './film-tabs-overview';
import FilmTabsReview from './film-tabs-review';

type FilmTabsContentProps = {
  activeTab: string;
}

function FilmTabsContent({activeTab}: FilmTabsContentProps): JSX.Element {
  switch (activeTab) {
    case 'Overview':
      return <FilmTabsOverview />;
    case 'Details':
      return <FilmTabsDetails />;
    case 'Review':
      return <FilmTabsReview />;
  }
  return <FilmTabsOverview />;
}

export default FilmTabsContent;

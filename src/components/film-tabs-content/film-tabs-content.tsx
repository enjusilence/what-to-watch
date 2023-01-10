import { FilmItem } from '../../types/film-item';
import { ReviewComments } from '../../types/review-comment';
import FilmTabsDetails from '../film-tabs-details/film-tabs-details';
import FilmTabsOverview from '../film-tabs-overview/film-tabs-overview';
import FilmTabsReview from '../film-tabs-review/film-tabs-review';

type FilmTabsContentProps = {
  activeTab: string;
  filmInfo: FilmItem;
  commentList: ReviewComments;
};

function FilmTabsContent({activeTab, filmInfo, commentList}: FilmTabsContentProps): JSX.Element {
  switch (activeTab) {
    case 'Overview':
      return <FilmTabsOverview filmInfo={filmInfo}/>;
    case 'Details':
      return <FilmTabsDetails filmInfo={filmInfo}/>;
    case 'Review':
      return <FilmTabsReview commentList={commentList}/>;
  }
  return <FilmTabsOverview filmInfo={filmInfo}/>;
}

export default FilmTabsContent;

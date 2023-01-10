import { ReviewComments } from '../../types/review-comment';
import { FilmTabsReviewComment } from '../film-tabs-review-comment/film-tabs-review-comment';

type FilmTabsReviewProps = {
  commentList: ReviewComments;
};

function FilmTabsReview({commentList}: FilmTabsReviewProps): JSX.Element {

  const leftColAmount = Math.ceil(commentList.length / 2);

  const commentListLeft = commentList.slice(0, leftColAmount);
  const commentListRight = commentList.slice(leftColAmount);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {commentListLeft.map(
          (reviewComment) => <FilmTabsReviewComment reviewComment={reviewComment} key={reviewComment.id}/>
        )}
      </div>
      <div className="film-card__reviews-col">
        {commentListRight.map(
          (reviewComment) => <FilmTabsReviewComment reviewComment={reviewComment} key={reviewComment.id}/>
        )}
      </div>
    </div>
  );
}

export default FilmTabsReview;

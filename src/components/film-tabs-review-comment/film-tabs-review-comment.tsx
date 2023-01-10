import { format } from 'date-fns';
import { ReviewComment } from '../../types/review-comment';

type FilmTabsReviewCommentProps = {
  reviewComment: ReviewComment;
};

export function FilmTabsReviewComment({reviewComment}: FilmTabsReviewCommentProps): JSX.Element {
  const {comment, date, rating, user: {name: userName}} = reviewComment;
  const parsedDate = new Date(Date.parse(date));
  const formattedDate = format(parsedDate, 'MMMM d, yyyy');

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">
          {comment}
        </p>
        <footer className="review__details">
          <cite className="review__author">{userName}</cite>
          <time className="review__date" dateTime={date}>
            {formattedDate}
          </time>
        </footer>
      </blockquote>
      <div className="review__rating">{rating}</div>
    </div>
  );
}

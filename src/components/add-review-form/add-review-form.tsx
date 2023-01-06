import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../store';
import { ReviewComments } from '../../types/review-comment';

const COMMENT_LENGTH_MIN = 50;
const COMMENT_LENGTH_MAX = 400;

type AddReviewFormProps = {
  filmID: number;
};

function AddReviewForm({filmID}: AddReviewFormProps): JSX.Element {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    rating: '0',
    'review-text': '',
  });
  const [isFormSending, setIsFormSending] = useState(false);

  const handleFieldChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  const commentLength = formData['review-text'].length;
  const isFormValid = (
    commentLength >= COMMENT_LENGTH_MIN
    && commentLength <= COMMENT_LENGTH_MAX
    && formData.rating !== '0'
    && !isFormSending
  );

  const handleOnSubmit = async (): Promise<void> => {
    if (!isFormValid) {return;}
    setIsFormSending(true);
    try {
      await api.post<ReviewComments>(`/comments/${filmID}`, {comment: formData['review-text'], rating: Number(formData.rating)});
      navigate('../');
    } catch (error) {
      setIsFormSending(false);
    }
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            <input
              className="rating__input"
              id="star-10"
              type="radio"
              name="rating"
              defaultValue={10}
              checked={formData.rating === '10'}
              onChange={handleFieldChange}
            />
            <label className="rating__label" htmlFor="star-10">
              Rating 10
            </label>
            <input
              className="rating__input"
              id="star-9"
              type="radio"
              name="rating"
              defaultValue={9}
              checked={formData.rating === '9'}
              onChange={handleFieldChange}
            />
            <label className="rating__label" htmlFor="star-9">
              Rating 9
            </label>
            <input
              className="rating__input"
              id="star-8"
              type="radio"
              name="rating"
              defaultValue={8}
              checked={formData.rating === '8'}
              onChange={handleFieldChange}
            />
            <label className="rating__label" htmlFor="star-8">
              Rating 8
            </label>
            <input
              className="rating__input"
              id="star-7"
              type="radio"
              name="rating"
              defaultValue={7}
              checked={formData.rating === '7'}
              onChange={handleFieldChange}
            />
            <label className="rating__label" htmlFor="star-7">
              Rating 7
            </label>
            <input
              className="rating__input"
              id="star-6"
              type="radio"
              name="rating"
              defaultValue={6}
              checked={formData.rating === '6'}
              onChange={handleFieldChange}
            />
            <label className="rating__label" htmlFor="star-6">
              Rating 6
            </label>
            <input
              className="rating__input"
              id="star-5"
              type="radio"
              name="rating"
              defaultValue={5}
              checked={formData.rating === '5'}
              onChange={handleFieldChange}
            />
            <label className="rating__label" htmlFor="star-5">
              Rating 5
            </label>
            <input
              className="rating__input"
              id="star-4"
              type="radio"
              name="rating"
              defaultValue={4}
              checked={formData.rating === '4'}
              onChange={handleFieldChange}
            />
            <label className="rating__label" htmlFor="star-4">
              Rating 4
            </label>
            <input
              className="rating__input"
              id="star-3"
              type="radio"
              name="rating"
              defaultValue={3}
              checked={formData.rating === '3'}
              onChange={handleFieldChange}
            />
            <label className="rating__label" htmlFor="star-3">
              Rating 3
            </label>
            <input
              className="rating__input"
              id="star-2"
              type="radio"
              name="rating"
              defaultValue={2}
              checked={formData.rating === '2'}
              onChange={handleFieldChange}
            />
            <label className="rating__label" htmlFor="star-2">
              Rating 2
            </label>
            <input
              className="rating__input"
              id="star-1"
              type="radio"
              name="rating"
              defaultValue={1}
              checked={formData.rating === '1'}
              onChange={handleFieldChange}
            />
            <label className="rating__label" htmlFor="star-1">
              Rating 1
            </label>
          </div>
        </div>
        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            onChange={handleFieldChange}
            value={formData['review-text']}
          />
          <div className="add-review__submit">
            <button onClick={() => void handleOnSubmit()} className="add-review__btn" type="button" disabled={!isFormValid}>
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddReviewForm;

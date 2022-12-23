import React from 'react';

function AddReviewForm(): JSX.Element {
  const [formData, setFormData] = React.useState({
    rating: '8',
    'review-text': '',
  });

  const fieldChangeHandle = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
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
              onChange={fieldChangeHandle}
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
              onChange={fieldChangeHandle}
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
              onChange={fieldChangeHandle}
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
              onChange={fieldChangeHandle}
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
              onChange={fieldChangeHandle}
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
              onChange={fieldChangeHandle}
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
              onChange={fieldChangeHandle}
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
              onChange={fieldChangeHandle}
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
              onChange={fieldChangeHandle}
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
              onChange={fieldChangeHandle}
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
            defaultValue={''}
            onChange={fieldChangeHandle}
          />
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddReviewForm;

type ShowMoreProps = {
  handleOnClick: () => void;
}

function ShowMore({handleOnClick}: ShowMoreProps): JSX.Element {
  return (
    <div className="catalog__more">
      <button onClick={handleOnClick} className="catalog__button" type="button">
        Show more
      </button>
    </div>
  );
}

export default ShowMore;

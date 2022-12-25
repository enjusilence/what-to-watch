type SmallFilmCardStaticProps = {
  src: string;
  title: string;
}

function SmallFilmCardStatic({src, title}: SmallFilmCardStaticProps): JSX.Element {
  return (
    <img
      src={src}
      alt={title}
      width={280}
      height={175}
    />
  );
}

export default SmallFilmCardStatic;

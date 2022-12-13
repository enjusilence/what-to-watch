import MainPage from '../../pages/main-page/main-page';

type MainPageProps = {
  promoTitle: string;
  promoGenre: string;
  promoReleaseYear: string;
}

function App(props: MainPageProps): JSX.Element {
  return <MainPage promoGenre={props.promoGenre} promoReleaseYear={props.promoReleaseYear} promoTitle={props.promoTitle}/>;
}

export default App;

import {Link} from 'react-router-dom';

function Page404(): JSX.Element {
  return (
    <body>
      <h1>404: Page Not Found</h1>
      <Link to='/'>
        Back to Main page
      </Link>
    </body>
  );
}

export default Page404;

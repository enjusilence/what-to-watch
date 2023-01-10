import { Link } from 'react-router-dom';

type FilmTabsNavProps = {
  activeTab: string;
  handleOnClick: (tabName: string, evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

function FilmTabsNav({activeTab, handleOnClick}: FilmTabsNavProps): JSX.Element {
  const tabList: string[] = ['Overview', 'Details', 'Review'];

  return (
    <ul className="film-nav__list">
      {tabList.map((tabName) =>
        (
          <li key={tabName} className={`film-nav__item ${(activeTab === tabName ? 'film-nav__item--active' : '')}`}>
            <Link to='#' onClick={(evt) => handleOnClick(tabName, evt)} className="film-nav__link">
              {tabName}
            </Link>
          </li>
        )
      )}
    </ul>
  );
}

export default FilmTabsNav;

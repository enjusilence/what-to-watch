import React from 'react';
import FilmTabsContent from './film-tabs-content/film-tabs-content';
import FilmTabsNav from './film-tabs-nav/film-tabs-nav';

function FilmTabs(): JSX.Element {
  const [activeTab, setActiveTab] = React.useState('Overview');

  const handleOnClick = (tabName: string, evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    evt.preventDefault();
    setActiveTab(tabName);
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <FilmTabsNav activeTab={activeTab} handleOnClick={handleOnClick}/>
      </nav>
      <FilmTabsContent activeTab={activeTab}/>
    </div>
  );
}

export default FilmTabs;

import React, { useState } from 'react';
import { FilmItem } from '../../types/film-item';
import { ReviewComments } from '../../types/review-comment';
import FilmTabsContent from './film-tabs-content/film-tabs-content';
import FilmTabsNav from './film-tabs-nav/film-tabs-nav';

type FilmTabsProps = {
  filmInfo: FilmItem;
  commentList: ReviewComments;
}

function FilmTabs({filmInfo, commentList}: FilmTabsProps): JSX.Element {
  const [activeTab, setActiveTab] = useState('Overview');

  const handleOnClick = (tabName: string, evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    evt.preventDefault();
    setActiveTab(tabName);
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <FilmTabsNav activeTab={activeTab} handleOnClick={handleOnClick}/>
      </nav>
      <FilmTabsContent activeTab={activeTab} filmInfo={filmInfo} commentList={commentList}/>
    </div>
  );
}

export default FilmTabs;

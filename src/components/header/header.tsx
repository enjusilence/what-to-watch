import { FC, ReactNode } from 'react';

type HeaderProps = {
  children: ReactNode;
  headerType: HeaderType;
};

export enum HeaderType {
  FilmCard = 'film-card__head',
  UserPage = 'user-page__head',
}

export const Header: FC<HeaderProps> = ({children, headerType}) =>
  (
    <header className={`page-header ${headerType}`}>
      {children}
    </header>
  );


import React from 'react';
import './header.scss';
import { Logo } from '../logo/Logo';

type HeaderProps = {
  children?: React.ReactNode;
  content?: React.ReactNode;
};
export const Header = (props: HeaderProps) => {
  return (
    <header className="header">
      <Logo />
      <div className="header-content">{props.children}</div>
    </header>
  );
};

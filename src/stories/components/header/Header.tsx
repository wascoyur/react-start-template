import React from 'react';
import './header.scss';

type HeaderProps = {
  children?: React.ReactNode | React.ReactNode[];
  content?: React.ReactNode;
};
export const Header = (props: HeaderProps) => {
  return (
    <header className="header">
      <div className="header-content">{props.children}</div>
    </header>
  );
};

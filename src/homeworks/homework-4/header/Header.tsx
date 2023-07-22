import React from 'react';
import './header.scss';

type HeaderProps = {
  children?: React.ReactNode;
  content?: React.ReactNode;
};
export const Header = (props: HeaderProps) => {
  return <header className="header">{props.children}</header>;
};

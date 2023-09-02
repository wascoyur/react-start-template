import React from 'react';
import './layout.scss';

type LayoutProps = {
  children?: React.ReactNode;
  content?: React.ReactNode;
};
export const Layout = (props: LayoutProps) => {
  return <div className="layout">{props.children}</div>;
};

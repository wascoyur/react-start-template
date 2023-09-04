import React, { PropsWithChildren } from 'react';
import './layout.scss';

export const Layout = (children: PropsWithChildren) => {
  const setActive = (isActive: boolean) => {
    return isActive ? 'active-link' : '';
  };
  return <>{children}</>;
};

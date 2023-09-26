import React, { PropsWithChildren } from 'react';
import '../scss/layout.scss';

export const Layout = (children: PropsWithChildren) => {
  const setActive = (isActive: boolean) => {
    return isActive ? 'active-link' : '';
  };
  return <>{children}</>;
};

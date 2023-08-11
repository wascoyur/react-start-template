import React from 'react';

type homeProps = {
  children?: React.ReactNode;
};
export const HomePage = ({ children }: homeProps) => {
  return (
    <>
      <h1>Домашняя страница</h1>
      {children}
    </>
  );
};

import React from 'react';
import { Header } from './components/header/Header';
import './components/scss/header.scss';

export default {
  title: 'Header',
  component: Header,
};

export const DefaultHeader = () => {
  return (
    <header className="header">
      <div className="header-content"></div>
    </header>
  );
};

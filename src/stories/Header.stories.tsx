import { Header } from './components/header/Header';
import './components/header/header.scss';
import React from 'react';
import { Logo } from './components/logo/Logo';

export default {
  title: 'Header',
  component: Header,
};

export const DefaultHeader = () => {
  return (
    <header className="header">
      <div className="header-content">
        <Logo />
      </div>
    </header>
  );
};

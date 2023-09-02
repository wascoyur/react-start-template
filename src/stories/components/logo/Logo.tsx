import React from 'react';
import LogoPicture from '../../assets/logo.jpg';
import './logo.scss';

export const Logo = () => {
  return (
    <div className="logo">
      <img src={LogoPicture} alt="logo" className="logo-image" />
    </div>
  );
};

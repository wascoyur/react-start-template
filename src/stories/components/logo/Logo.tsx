import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoPicture from '../../assets/logo.jpg';
import './logo.scss';

export const Logo = () => {
  return (
    <NavLink to=".">
      <div className="logo">
        <img src={LogoPicture} alt="logo" className="logo-image" />
      </div>
    </NavLink>
  );
};

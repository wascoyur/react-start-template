import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Header } from 'src/stories/components/header/Header';
import { Logo } from 'src/stories/components/logo/Logo';
import './layout.scss';

export const Layout = () => {
  const setActive = (isActive: boolean) => {
    return isActive ? 'active-link' : '';
  };
  return (
    <>
      <Header>
        <Logo />
        <NavLink to={'products'} className={({ isActive }) => setActive(isActive)}>
          Товары
        </NavLink>
        <NavLink to={'edit-products'} className={({ isActive }) => setActive(isActive)}>
          Создание/редактирование товара
        </NavLink>
        <NavLink to={'bucket'} className={({ isActive }) => setActive(isActive)}>
          Корзина
        </NavLink>
        <NavLink to={'profile'} className={({ isActive }) => setActive(isActive)}>
          Профиль
        </NavLink>
        <NavLink to={'register'} className={({ isActive }) => setActive(isActive)}>
          Регистрация
        </NavLink>
      </Header>
      <main>
        <Outlet />
      </main>
      <footer> footer</footer>
    </>
  );
};

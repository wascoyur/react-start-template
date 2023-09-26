import React from 'react';
import '../scss/header.scss';
import { useUserAuth } from 'src/components/hooks/isAuth';
import { useStore } from 'src/store/state';
import { useGetExternalUser } from 'src/mock-data/mock-profile';
import { NavLink } from 'react-router-dom';
import { Logo } from 'src/stories/components/logo/Logo';

type HeaderProps = {
  children?: React.ReactNode | React.ReactNode[];
  content?: React.ReactNode;
};
export const Header = (props: HeaderProps) => {
  return (
    <header className="header">
      <div className="header-content">{props.children}</div>
    </header>
  );
};

export const AppHeader = () => {
  useGetExternalUser();
  const isUserAuth = useUserAuth();
  const loggedUser = useStore((state) => state.loggedUser);
  const bucket = useStore((state) => state.bucket);
  return (
    <Header>
      <NavLink to={'/'}>
        <Logo />
      </NavLink>
      <NavLink to={'products'}>Товары</NavLink>
      <NavLink to={'bucket'}>Корзина Всего {bucket?.length || 0} товаров</NavLink>
      <NavLink to={'auth'}>{isUserAuth ? loggedUser?.username : `Вход`}</NavLink>
    </Header>
  );
};

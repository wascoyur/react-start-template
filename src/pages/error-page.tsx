import React from 'react';
import { NavLink } from 'react-router-dom';
import '../scss/error-page.scss';

export function ErrorPage() {
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Ой... Случилась непредвиденная ошибка. Мы уже работаем над ее устранением.</p>

      <p>
        <NavLink to="/">Вернуться на стартовую</NavLink>
      </p>
    </div>
  );
}

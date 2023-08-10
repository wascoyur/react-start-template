import React from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import '../scss/error-page.scss';

export function ErrorPage() {
  const error = useRouteError();
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    // error is type `ErrorResponse`
    errorMessage = error.error?.message || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = 'Unknown error';
  }
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Ой... Случилась непредвиденная ошибка. Мы уже работаем над ее устранением.</p>
      <p>
        <i>{errorMessage}</i>
      </p>
    </div>
  );
}

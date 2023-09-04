import React from 'react';
import { RegisterUser } from './components/hw-6-Forms/RegisterUser';

export default {
  title: 'Форма регистрации пользователя',
  component: RegisterUser,
};

export const UserRegisterFormS = () => {
  return (
    <>
      <RegisterUser />
    </>
  );
};

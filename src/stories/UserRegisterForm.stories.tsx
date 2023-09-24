import React from 'react';
import { RegisterUser } from 'src/stories/components/profle/RegisterUser';

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

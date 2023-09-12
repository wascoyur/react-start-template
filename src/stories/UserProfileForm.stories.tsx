import React from 'react';
import { RedoUserProfileForm } from './components/hw-6-Forms/RedoUserProfileForm';
import { ChangeUserPassword } from './components/hw-6-Forms/ChangeUserPassword';
import { Divider } from './components/share/Divider';

export default {
  title: 'Форма редактирования профиля пользователя',
  component: RedoUserProfileForm,
};

export const AddRedoUserFormS = () => {
  return (
    <>
      <RedoUserProfileForm />
      <Divider />
      <ChangeUserPassword />
    </>
  );
};

import React from 'react';
import { RedoUserProfileForm } from './components/hw-6-Forms/RedoUserProfileForm';
import { SecurityUserForm } from './components/hw-6-Forms/SecurityUserForm';
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
      <SecurityUserForm />
    </>
  );
};

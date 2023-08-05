import React from 'react';
import { AddRedoUserForm } from './components/hw-6-Profile/AddRedoUserForm';
import { SecurityUserForm } from './components/hw-6-Profile/SecurityUserForm';
import { Devider } from './components/share/Divider';

export default {
  title: 'Форма редактирования профиля пользователя',
  component: AddRedoUserForm,
};

export const AddRedoUserFormS = () => {
  return (
    <>
      <AddRedoUserForm />
      <Devider />
      <SecurityUserForm />
    </>
  );
};

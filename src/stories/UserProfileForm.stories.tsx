import React from 'react';
import { AddRedoUserForm } from './components/hw-6-Forms/AddRedoUserForm';
import { SecurityUserForm } from './components/hw-6-Forms/SecurityUserForm';
import { Divider } from './components/share/Divider';

export default {
  title: 'Форма редактирования профиля пользователя',
  component: AddRedoUserForm,
};

export const AddRedoUserFormS = () => {
  return (
    <>
      <AddRedoUserForm />
      <Divider />
      <SecurityUserForm />
    </>
  );
};
